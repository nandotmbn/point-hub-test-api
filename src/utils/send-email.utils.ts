/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer';
import mustache from 'mustache';
import dotEnv from 'dotenv';
import { htmlEmailInvitation } from '../static/email-team-invitation';
import { AppLogger } from '../logs/error.logs';

async function sendMail(payload: { username: string; email: string; invitation_key: string }) {
  dotEnv.config();
  const template = htmlEmailInvitation;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mail = {
    to: payload.email,
    from: process.env.EMAIL,
    subject: 'Point Hub Mail Invitations',
    html: mustache.render(template, { ...payload, host: process.env.HOST })
  };

  return transporter
    .sendMail(mail)
    .then(() => {
      return true;
    })
    .catch((err: any) => {
      console.log('[smtp]: ' + err);
      AppLogger.error(err);
      return false;
    });
}

export { sendMail };
