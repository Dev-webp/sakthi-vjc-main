import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const {
    name,
    email,
    phone,
    age,
    qualification,
    englishfluent,
    experience,
    country,
    message,
  } = await request.json();

  console.log('Received form data:', {
    name, email, phone, age, qualification, englishfluent, experience, country, message,
  });

  try {
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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vjcbangalore@gmail.com',
      subject: 'New Contact Form Submission from VJC Overseas',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Country: ${country}
        Age: ${age}
        Qualification: ${qualification}
        Experience: ${experience}
        English Fluency: ${englishfluent}
        Message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Unknown error occurred' }, { status: 500 });
  }
}
