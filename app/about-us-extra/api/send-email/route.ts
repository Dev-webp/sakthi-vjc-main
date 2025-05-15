import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, age, message, selectedCountry, mcqAnswers } = await request.json();

  // Log the received form data to verify that selectedCountry is included
  console.log('Received data:', { name, email, phone, age, message, selectedCountry, mcqAnswers });

  try {
    // Create Nodemailer transporter with Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vjcbangalore@gmail.com',
      subject: 'New Contact Form Submission From VJC Overseas',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Age: ${age}
        Message: ${message}
        Selected Country: ${selectedCountry}  
        MCQ Answers: ${mcqAnswers.join(', ')}  
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Log email sending response for debugging
    console.log('Email sent: ', info.response);

    // Return success response
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      console.error('Stack:', error.stack);
      return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }

    console.error('Unknown error occurred while sending email');
    return NextResponse.json({ message: 'Unknown error occurred', error: 'Unknown error' }, { status: 500 });
  }
}
