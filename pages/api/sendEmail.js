import { Resend } from 'resend';
import EmailTemplate from '@/app/components/EmailTemplate';


export default async function handler(req, res) {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
        from: 'lucas-portfolio-site@tattedo.com',
        to: 'lucasvasconcelos503@gmail.com',
        subject: 'Hello World',
        react: <EmailTemplate firstName="Lucas" />
    });
    console.log(error)
    res.status(200).json(data)

    if (error) {
        res.status(400).json(error)
    }
}
