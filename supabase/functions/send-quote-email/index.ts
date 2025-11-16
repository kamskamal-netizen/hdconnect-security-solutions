import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// Nécessite l'installation de @sendgrid/mail dans le projet Supabase Edge Function
// Pour cet exemple, nous allons simuler l'envoi avec fetch à une API d'envoi d'e-mails
// NOTE: L'utilisateur doit configurer sa propre clé API SendGrid (ou autre) dans les secrets Supabase.

const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");
const TARGET_EMAIL = "kamal@hdconnect.fr";
const SENDER_EMAIL = "no-reply@hdconnect.fr"; // Adresse générique

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ status: "error", message: "Method Not Allowed" }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY not set in environment variables.");
    return new Response(
      JSON.stringify({ status: "error", message: "Server configuration error: Email service not available." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const formData = await req.json();
    
    // 1. Construction du corps de l'e-mail
    let subject = `[HD Connect - Demande] `;
    let body = `Nouvelle demande reçue via le formulaire du site.\n\n`;

    // Logique pour déterminer le type de demande et construire le sujet/corps
    if (formData.requestType === 'quote') {
      const serviceLabel = formData.selectedService || 'Devis Général';
      subject += `Devis: ${serviceLabel}`;
      body += `--- Demande de Devis ---\n`;
      body += `Service: ${serviceLabel}\n\n`;
      
      // Détails du projet (QuoteFunnel)
      if (formData.quoteData) {
        body += `--- Détails du Projet ---\n`;
        for (const [key, value] of Object.entries(formData.quoteData.details || {})) {
          body += `${key}: ${value}\n`;
        }
        body += `\n`;
      }
      
      // Informations Client (QuoteFunnel)
      if (formData.clientInfo) {
        body += `--- Informations Client ---\n`;
        body += `Nom: ${formData.clientInfo.name || 'N/A'}\n`;
        body += `Téléphone: ${formData.clientInfo.phone || 'N/A'}\n`;
        body += `Email: ${formData.clientInfo.email || 'N/A'}\n`;
        body += `Adresse (Ville/CP): ${formData.clientInfo.address || 'N/A'}\n`;
        body += `Période souhaitée: ${formData.clientInfo.timeline || 'N/A'}\n`;
        body += `Budget: ${formData.clientInfo.budget || 'Non spécifié'}\n`;
        body += `Message: ${formData.clientInfo.message || 'Aucun'}\n`;
      }

    } else if (formData.requestType === 'intervention') {
      const problemLabel = formData.selectedProblem || 'Intervention Générale';
      subject += `Intervention: ${problemLabel}`;
      body += `--- Demande d'Intervention ---\n`;
      body += `Type de Problème: ${problemLabel}\n`;
      
      // Détails de l'intervention (QuoteFunnel)
      if (formData.interventionData) {
        body += `--- Détails du Problème ---\n`;
        body += `Description: ${formData.interventionData.description || 'N/A'}\n`;
        body += `Fonctionnait avant: ${formData.interventionData.workedBefore || 'N/A'}\n`;
        body += `Lieu: ${formData.interventionData.locationType || 'N/A'}\n`;
        body += `Urgence: ${formData.interventionData.urgency || 'N/A'}\n\n`;
      }

      // Informations Client (QuoteFunnel)
      if (formData.clientInfo) {
        body += `--- Informations Client ---\n`;
        body += `Nom: ${formData.clientInfo.name || 'N/A'}\n`;
        body += `Téléphone: ${formData.clientInfo.phone || 'N/A'}\n`;
        body += `Email: ${formData.clientInfo.email || 'N/A'}\n`;
        body += `Adresse (Ville/CP): ${formData.clientInfo.address || 'N/A'}\n`;
        body += `Message: ${formData.clientInfo.message || 'Aucun'}\n`;
      }
    } else {
      // Cas du QuoteFunnelSimple
      subject += `Demande de contact`;
      body += `--- Demande de Contact Simple ---\n`;
      body += `Service: ${formData.selectedService || 'N/A'}\n`;
      body += `Problème: ${formData.selectedProblem || 'N/A'}\n\n`;
      body += `--- Informations Client ---\n`;
      body += `Nom: ${formData.name || 'N/A'}\n`;
      body += `Téléphone: ${formData.phone || 'N/A'}\n`;
      body += `Email: ${formData.email || 'N/A'}\n`;
      body += `Adresse (Ville/CP): ${formData.address || 'N/A'}\n`;
      body += `Période souhaitée: ${formData.timeline || 'N/A'}\n`;
      body += `Budget: ${formData.budget || 'Non spécifié'}\n`;
      body += `Description: ${formData.description || 'Aucune'}\n`;
      body += `Urgence: ${formData.urgency || 'N/A'}\n`;
      body += `Message: ${formData.message || 'Aucun'}\n`;
    }

    // 2. Envoi de l'e-mail via SendGrid (ou autre service)
    const sendgridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: TARGET_EMAIL }],
            // Optionnel: Répondre à l'adresse du client
            // reply_to: { email: formData.clientInfo?.email || formData.email, name: formData.clientInfo?.name || formData.name },
          },
        ],
        from: { email: SENDER_EMAIL, name: "HD Connect - Formulaire" },
        subject: subject,
        content: [{ type: "text/plain", value: body }],
      }),
    });

    if (sendgridResponse.ok) {
      return new Response(
        JSON.stringify({ status: "success", message: "Email sent successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      const errorBody = await sendgridResponse.json();
      console.error("SendGrid Error:", errorBody);
      return new Response(
        JSON.stringify({ status: "error", message: `Failed to send email: ${sendgridResponse.statusText}` }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

  } catch (error) {
    console.error("Function Error:", error);
    return new Response(
      JSON.stringify({ status: "error", message: error.message || "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
