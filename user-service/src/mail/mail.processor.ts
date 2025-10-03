// src/mail/mail.processor.ts
import { Process, Processor } from '@nestjs/bull';
import type { Job } from 'bull';  // ✅ use 'import type' for TS isolatedModules
import * as nodemailer from 'nodemailer';

@Processor('mail')
export class MailProcessor {
  @Process('sendMailtoUser')
  async handleSendMail(job: Job) {
    const { email, subject, message } = job.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject,
      text: message,
    });

    console.log(`📧 Email sent to ${email}`);
  }
}
