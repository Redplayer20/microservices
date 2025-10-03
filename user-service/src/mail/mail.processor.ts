import { Process,Processor } from "@nestjs/bull";
import { Job } from "bull";
import * as nodemailer from 'nodemailer';

@Processor('mail')
export class MailProcessor {
    @Process('sendMailtoUser')
    async handleSendMail(job:Job) {
        const {email, subject, message} = job.data;

        const transporter= nodemailer.createTransport({
            //service: 'gmail',
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: 'chaitanyakms@gmail.com',
            to: email,
            subject: subject,
            text: message,
        });

        console.log(`Email sent to ${email}`);

    }
}