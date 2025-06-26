"use server";

import nodemailer from "nodemailer";
import {
  generateConfirmationTemplate,
  generateInquiryTemplate,
} from "./Email_templet";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const service =
      formData.get("service")?.toString().trim() || "Not specified";
    const message = formData.get("message")?.toString().trim() || "";

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return { success: false, error: "Please fill in all required fields." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    const data: ContactFormData = { name, email, phone, service, message };

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., "smtp.gmail.com"
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your email address
        pass: process.env.SMTP_PASS, // your email password or app password
      },
    });

    // 1. Send inquiry email to the business
    const inquiryMailOptions = {
      from: `"Shove Electricals Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "info@shoveelectricals.com",
      subject: "New Contact Form Submission – Shove Electricals",
      html: generateInquiryTemplate(data),
    };

    // 2. Send confirmation email to the customer
    const confirmationMailOptions = {
      from: `"Shove Electricals" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "We've Received Your Inquiry – Shove Electricals",
      html: generateConfirmationTemplate(data),
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(inquiryMailOptions),
      transporter.sendMail(confirmationMailOptions),
    ]);

    return { success: true };
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}

// "use server"

// interface ContactFormData {
//   name: string
//   email: string
//   phone: string
//   service?: string
//   message: string
// }

// export async function submitContactForm(formData: FormData) {
//   try {
//     const data: ContactFormData = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       phone: formData.get("phone") as string,
//       service: (formData.get("service") as string) || "Not specified",
//       message: formData.get("message") as string,
//     }

//     // Validate required fields
//     if (!data.name || !data.email || !data.phone || !data.message) {
//       return { success: false, error: "Please fill in all required fields." }
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(data.email)) {
//       return { success: false, error: "Please enter a valid email address." }
//     }

//     // In a real application, you would send this data to your email service
//     // For now, we'll simulate the email sending process

//     // Example using environment variable for recipient email
//     const recipientEmail = process.env.CONTACT_EMAIL || "info@shoveelectricals.com"

//     // Here you would integrate with your preferred email service:
//     // - Nodemailer with SMTP
//     // - SendGrid
//     // - AWS SES
//     // - Resend
//     // - etc.

//     console.log("Contact form submission:", {
//       ...data,
//       recipientEmail,
//       timestamp: new Date().toISOString(),
//     })

//     // Simulate email sending delay
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     // In production, you might also want to:
//     // - Save to database
//     // - Send confirmation email to customer
//     // - Notify team via Slack/Discord
//     // - Create ticket in CRM system

//     return { success: true }
//   } catch (error) {
//     console.error("Contact form error:", error)
//     return { success: false, error: "An unexpected error occurred. Please try again." }
//   }
// }
