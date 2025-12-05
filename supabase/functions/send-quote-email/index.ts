import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const TARGET_EMAIL = "kamal@hdconnect.fr";
const SENDER_EMAIL = "HD Connect <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Email de confirmation pour le client
const getClientConfirmationEmail = (clientName: string, requestType: string) => {
  const typeLabels: Record<string, string> = {
    quote: "demande de devis",
    intervention: "demande d'intervention",
    contact: "message"
  };
  
  const typeLabel = typeLabels[requestType] || "demande";
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px;">HD Connect</h1>
        <p style="color: #bfdbfe; margin: 10px 0 0 0; font-size: 14px;">Sécurité & Technologie</p>
      </div>
      
      <div style="padding: 40px 30px;">
        <h2 style="color: #1f2937; margin-top: 0;">Bonjour ${clientName},</h2>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Nous avons bien reçu votre <strong>${typeLabel}</strong> et nous vous en remercions.
        </p>
        
        <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
          <p style="color: #1e40af; margin: 0; font-weight: 600;">
            ✓ Votre demande a été enregistrée avec succès
          </p>
        </div>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Notre équipe va étudier votre demande et vous recontactera dans les <strong>plus brefs délais</strong> 
          (généralement sous 24 à 48 heures ouvrées).
        </p>
        
        <div style="background-color: #f9fafb; padding: 25px; border-radius: 8px; margin: 25px 0;">
          <h3 style="color: #1f2937; margin-top: 0; font-size: 16px;">En attendant, vous pouvez nous contacter :</h3>
          <p style="color: #4b5563; margin: 10px 0;">
            📞 <a href="tel:+33627135304" style="color: #2563eb; text-decoration: none;">+33 6 27 13 53 04</a> (Mobile)
          </p>
          <p style="color: #4b5563; margin: 10px 0;">
            📞 <a href="tel:+33183643640" style="color: #2563eb; text-decoration: none;">+33 1 83 64 36 40</a> (Fixe)
          </p>
          <p style="color: #4b5563; margin: 10px 0;">
            ✉️ <a href="mailto:kamal@hdconnect.fr" style="color: #2563eb; text-decoration: none;">kamal@hdconnect.fr</a>
          </p>
        </div>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Cordialement,<br/>
          <strong>L'équipe HD Connect</strong>
        </p>
      </div>
      
      <div style="background-color: #1f2937; padding: 25px 30px; text-align: center;">
        <p style="color: #9ca3af; margin: 0 0 10px 0; font-size: 14px;">
          HD Connect - Expert en Sécurité depuis 10 ans
        </p>
        <p style="color: #6b7280; margin: 0; font-size: 12px;">
          Vidéosurveillance • Alarmes • Contrôle d'accès • Domotique
        </p>
      </div>
    </div>
  `;
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

    // Si c'est une demande de confirmation uniquement (Formspree gère la notification admin)
    if (formData.confirmationOnly) {
      const clientEmail = formData.clientInfo?.email || "";
      const clientName = formData.clientInfo?.name || "Client";
      
      if (clientEmail) {
        const clientEmailResponse = await resend.emails.send({
          from: SENDER_EMAIL,
          to: [clientEmail],
          subject: "✅ Confirmation de votre demande - HD Connect",
          html: getClientConfirmationEmail(clientName, formData.requestType || "contact"),
        });
        console.log("Client confirmation email sent:", clientEmailResponse);
        
        return new Response(
          JSON.stringify({ success: true, clientMessageId: (clientEmailResponse as any).id }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ success: true, message: "No client email provided" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let subject = "";
    let body = "";
    let clientEmail = "";
    let clientName = "";

    // Construction de l'email selon le type de demande (pour usage futur si besoin)
    if (formData.requestType === "quote") {
      clientEmail = formData.clientInfo?.email || "";
      clientName = formData.clientInfo?.name || "Client";
      
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
      clientEmail = formData.clientInfo?.email || "";
      clientName = formData.clientInfo?.name || "Client";
      
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
      clientEmail = formData.email || "";
      clientName = formData.name || "Client";
      
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

    // Envoi de l'email à HD Connect (notification)
    const adminEmailResponse = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [TARGET_EMAIL],
      subject: subject,
      html: body,
    });

    console.log("Admin notification email sent:", adminEmailResponse);

    // Envoi de l'email de confirmation au client
    let clientEmailResponse = null;
    if (clientEmail) {
      try {
        clientEmailResponse = await resend.emails.send({
          from: SENDER_EMAIL,
          to: [clientEmail],
          subject: "✅ Confirmation de votre demande - HD Connect",
          html: getClientConfirmationEmail(clientName, formData.requestType || "contact"),
        });
        console.log("Client confirmation email sent:", clientEmailResponse);
      } catch (clientEmailError: any) {
        console.error("Error sending client confirmation email:", clientEmailError);
        // On continue même si l'email de confirmation échoue
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        adminMessageId: (adminEmailResponse as any).id || "sent",
        clientMessageId: (clientEmailResponse as any)?.id || null
      }),
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
