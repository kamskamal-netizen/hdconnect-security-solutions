import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const TARGET_EMAIL = "kamal@hdconnect.fr";
const SENDER_EMAIL = "HD Connect <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Enforce POST method
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const formData = await req.json();
    console.log("Received form data:", formData);

    let subject = "";
    let body = "";

    // Construction de l'email selon le type de demande
    if (formData.requestType === "quote") {
      subject = "🔔 Nouvelle demande de devis - HD Connect";
      body = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nouvelle demande de devis
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations client</h3>
            <p><strong>Nom :</strong> ${formData.clientInfo.name}</p>
            <p><strong>Email :</strong> <a href="mailto:${formData.clientInfo.email}">${formData.clientInfo.email}</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:${formData.clientInfo.phone}">${formData.clientInfo.phone}</a></p>
            <p><strong>Adresse :</strong> ${formData.clientInfo.address}</p>
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Détails du projet</h3>
            <p><strong>Service demandé :</strong> ${formData.quoteData.service}</p>
            <p><strong>Période souhaitée :</strong> ${formData.quoteData.timeline}</p>
            ${formData.quoteData.budget ? `<p><strong>Budget estimé :</strong> ${formData.quoteData.budget}</p>` : ''}
            ${formData.quoteData.description ? `<p><strong>Description :</strong><br/>${formData.quoteData.description.replace(/\n/g, '<br/>')}</p>` : ''}
          </div>
          
          ${formData.message ? `
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1f2937; margin-top: 0;">Message supplémentaire</h3>
              <p>${formData.message.replace(/\n/g, '<br/>')}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement depuis le site HD Connect.</p>
          </div>
        </div>
      `;
    } else if (formData.requestType === "intervention") {
      subject = "🚨 Demande d'intervention urgente - HD Connect";
      body = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            ⚠️ Demande d'intervention urgente
          </h2>
          
          <div style="background-color: #fee2e2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #991b1b; margin-top: 0;">Niveau d'urgence : ${formData.interventionData.urgency}</h3>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations client</h3>
            <p><strong>Nom :</strong> ${formData.clientInfo.name}</p>
            <p><strong>Email :</strong> <a href="mailto:${formData.clientInfo.email}">${formData.clientInfo.email}</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:${formData.clientInfo.phone}">${formData.clientInfo.phone}</a></p>
            <p><strong>Adresse :</strong> ${formData.clientInfo.address}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Détails du problème</h3>
            <p><strong>Type de problème :</strong> ${formData.interventionData.problemType}</p>
            <p><strong>Description :</strong><br/>${formData.interventionData.description.replace(/\n/g, '<br/>')}</p>
          </div>
          
          ${formData.message ? `
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1f2937; margin-top: 0;">Message supplémentaire</h3>
              <p>${formData.message.replace(/\n/g, '<br/>')}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement depuis le site HD Connect.</p>
          </div>
        </div>
      `;
    } else {
      // Contact simple (depuis le formulaire Contact)
      subject = "📧 Nouveau message de contact - HD Connect";
      body = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations</h3>
            <p><strong>Nom :</strong> ${formData.name}</p>
            <p><strong>Email :</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            ${formData.phone ? `<p><strong>Téléphone :</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>` : ''}
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p>${formData.message.replace(/\n/g, '<br/>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement depuis le site HD Connect.</p>
          </div>
        </div>
      `;
    }

    // Envoi de l'email via Resend
    const emailResponse = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [TARGET_EMAIL],
      subject: subject,
      html: body,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, messageId: emailResponse.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
