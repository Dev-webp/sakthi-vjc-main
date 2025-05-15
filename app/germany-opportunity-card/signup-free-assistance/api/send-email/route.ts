// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, age, message } = await request.json();

  try {
    // Create Nodemailer transporter with Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail as the service
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address (e.g., your-email@gmail.com)
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
      tls: {
        // It's usually good to keep TLS security settings enabled
        rejectUnauthorized: true, // Set to true for better security
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'vjcbangalore@gmail.com', // Recipient address
      subject: 'New Contact Form Submission From VJC Overseas',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Age: ${age}
        Message: ${message}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Log email sending response for debugging
    console.log('Email sent: ', info.response);

    // Return success response
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    // Handle known errors (from nodemailer)
    if (error instanceof Error) {
      console.error('Error sending email:', error.message); // Log the error for debugging
      console.error('Stack:', error.stack);  // Log the stack trace for more detailed debugging
      return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }

    // Handle any unknown errors
    console.error('Unknown error occurred while sending email');
    return NextResponse.json({ message: 'Unknown error occurred', error: 'Unknown error' }, { status: 500 });
  }
}
