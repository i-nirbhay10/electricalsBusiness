export function generateInquiryTemplate(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Inquiry - Verma Electricals</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif; color: #333;">
      <div style="max-width: 600px; margin: 30px auto; background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #007BFF; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px;">New Inquiry Received</h2>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px;">You’ve received a new contact form submission. Details are below:</p>
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px;">${data.name}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${data.phone}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Service:</td>
              <td style="padding: 10px;">${data.service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px;">${data.message.replace(
                /\n/g,
                "<br>"
              )}</td>
            </tr>
          </table>
        </div>
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          © ${new Date().getFullYear()} Verma Electricals — Contact Form Notification
        </div>
      </div>
    </body>
  </html>
  `;
}

export function generateConfirmationTemplate(data: {
  name: string;
  phone: string;
  service: string;
  message: string;
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You – Verma Electricals</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: #007BFF;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 24px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              line-height: 1.8;
          }
          .button {
              display: inline-block;
              padding: 12px 25px;
              margin: 20px 0;
              background-color: #007BFF;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              text-align: center;
              font-size: 16px;
              font-weight: bold;
              transition: background-color 0.3s;
          }
          .button:hover {
              background-color: #0056b3;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 15px;
              text-align: center;
              color: #777;
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          ul {
              margin: 10px 0 20px;
              padding-left: 20px;
          }
          p {
              margin: 0 0 15px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Thank You for Contacting Us!</div>
          <div class="content">
              <p>Hello ${data.name},</p>
              <p>Thanks for reaching out to Verma Electricals. We’ve received your inquiry and will get back to you shortly.</p>
              <p>Here’s a summary of your message:</p>
              <ul>
                  <li><strong>Service:</strong> ${data.service}</li>
                  <li><strong>Phone:</strong> ${data.phone}</li>
                  <li><strong>Message:</strong> ${data.message}</li>
              </ul>
              <p>If you have any urgent queries, feel free to call us or reply to this email.</p>
              <p>Regards,<br>The Verma Electricals Team</p>
          </div>
          <div class="footer">
              &copy; ${new Date().getFullYear()} Verma Electricals. All rights reserved.
          </div>
      </div>
  </body>
  </html>
  `;
}
