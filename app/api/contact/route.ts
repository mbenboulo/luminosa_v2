import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, profession, comments } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'mackleodebenboulo+luminosa@gmail.com',
            subject: `New Luminosa Contact: ${name} (${profession})`,
            text: `
          Name: ${name}
          Email: ${email}
          Profession: ${profession}
          
          Message:
          ${comments}
        `,
            html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Profession:</strong> ${profession}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${comments.replace(/\n/g, '<br>')}</p>
        `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
