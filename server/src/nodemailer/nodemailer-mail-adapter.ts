import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b603c6eee33e34",
      pass: "6ccef285272d7b"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
  async  sendMail({subject ,body}: SendMailData) {

    await  transport.sendMail ({
    from:'Equipe Fedget <oi@ferget.com>',
    to:'Ariel Marcelino <ariel.marcelino@whaticket.com>',
    subject:subject,
    
    html: body,
    // teste
});
    }
}