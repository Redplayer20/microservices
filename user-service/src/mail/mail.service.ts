// src/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';  // ✅ use 'import type'

@Injectable()
export class MailService {
  constructor(@InjectQueue('mail') private readonly mailQueue: Queue) {}

  async sendMailtoUser(email: string, subject: string, message: string) {
    await this.mailQueue.add('sendMailtoUser', {
      email,
      subject,
      message,
    });
  }
}
