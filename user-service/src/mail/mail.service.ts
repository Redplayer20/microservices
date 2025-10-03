import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class MailService {
    constructor(
        @InjectQueue('mail') private mailQueue: Queue){}

        async sendMailtoUser(email: string, subject: string , message:string){
            await this.mailQueue.add('sendMailtoUser', {
                email,
                subject,
                message,
            });
        }
}
