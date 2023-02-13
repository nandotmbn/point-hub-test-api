import nodemailer from 'nodemailer';
import mustache from 'mustache';
// import fs from 'fs';
import dotEnv from "dotenv"
import { htmlEmailInvitation } from '../static/email-team-invitation';

function sendMail(payload: { username: string, email: string }) {
  dotEnv.config()
  const template = htmlEmailInvitation
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    },
  });

  const mail = {
    to: payload.email,
    from: process.env.EMAIL,
    subject: 'Point Hub Mail Invitations',
    html: mustache.render(template, { ...payload })
  };
  transporter.sendMail(mail);
}

export {sendMail}