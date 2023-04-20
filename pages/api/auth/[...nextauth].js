// pages/api/auth/[...nextauth].js
import Handlebars from 'handlebars';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import nodemailer from 'nodemailer';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import path from 'path';
const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  secure: true,
});

const emailsDir = path.resolve(process.cwd(), 'emails');

const sendVerificationRequest = ({ identifier, url }) => {
  const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
    encoding: 'utf8',
  });
  const emailTemplate = Handlebars.compile(emailFile);
  transporter.sendMail({
    from: `"✨ Recpay" ${process.env.EMAIL_FROM}`,
    to: identifier,
    subject: 'Your sign-in link for SupaVacation',
    html: emailTemplate({
      base_url: process.env.NEXTAUTH_URL,
      signin_url: url,
      email: identifier,
    }),
  });
};

const sendWelcomeEmail = async ({ user }) => {
  const { email } = user;

  try {
    const emailFile = readFileSync(path.join(emailsDir, 'welcome.html'), {
      encoding: 'utf8',
    });
    const emailTemplate = Handlebars.compile(emailFile);
    await transporter.sendMail({
      from: `"✨ Recpay" ${process.env.EMAIL_FROM}`,
      to: email,
      subject: 'Welcome to Recpay! 🎉',
      html: emailTemplate({
        base_url: process.env.NEXTAUTH_URL,
        support_email: 'support@digitalkoncept.com',
      }),
    });
  } catch (error) {
    console.log(`❌ Unable to send welcome email to user (${email})`);
  }
};
// pages/api/auth/[...nextauth].js
export default NextAuth({
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    verifyRequest: '/',
  },
    providers: [
      EmailProvider({
        maxAge: 10 * 60,
        sendVerificationRequest,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    jwt:{
      secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = token || {}; // Ensure token is defined
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      if (token) {
        session.user = session.user || {}; // Ensure session.user is defined
        session.user.id = token.id;
      }
      return session;
    },
  },
    adapter: PrismaAdapter(prisma),
    events: { createUser: sendWelcomeEmail }
  });

  