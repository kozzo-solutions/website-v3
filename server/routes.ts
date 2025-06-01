import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

// Email configuration (using environment variables)
const EMAIL_USER = process.env.EMAIL_USER || process.env.GMAIL_USER || "admin@kozzo.ca";
const EMAIL_PASS = process.env.EMAIL_PASS || process.env.GMAIL_PASS || "";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@kozzo.ca";

// Simple email sending function (simulation for now, would use nodemailer in production)
async function sendEmail(to: string, subject: string, text: string, html?: string) {
  // In a production environment, this would use nodemailer with SMTP configuration
  console.log(`Email would be sent to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Content: ${text}`);
  
  // Simulate email sending
  return Promise.resolve({ success: true });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Prepare email content
      const emailSubject = `Nouvelle demande de contact - ${validatedData.subject}`;
      const emailText = `
Nouvelle demande de contact reçue via le site web Kozzo:

Nom: ${validatedData.name}
Email: ${validatedData.email}
Entreprise: ${validatedData.businessName || 'Non spécifiée'}
Sujet: ${validatedData.subject}

Message:
${validatedData.message}

---
Soumis le: ${new Date().toLocaleString('fr-CA')}
      `;
      
      const emailHtml = `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
        <p><strong>Entreprise:</strong> ${validatedData.businessName || 'Non spécifiée'}</p>
        <p><strong>Sujet:</strong> ${validatedData.subject}</p>
        <div>
          <strong>Message:</strong>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${validatedData.message.replace(/\n/g, '<br>')}
          </p>
        </div>
        <hr>
        <p><small>Soumis le: ${new Date().toLocaleString('fr-CA')}</small></p>
      `;
      
      // Send email to admin
      await sendEmail(ADMIN_EMAIL, emailSubject, emailText, emailHtml);
      
      res.json({ 
        success: true, 
        message: "Message envoyé avec succès",
        submissionId: submission.id 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Données invalides",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erreur interne du serveur" 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erreur lors de la récupération des soumissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
