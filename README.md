# Portfolio Website

A modern, minimal portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Modern, clean UI design
- Responsive layout
- Smooth animations
- Contact form with email integration
- Dark theme

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

3. Configure your environment variables:
   - Get your Resend API key from [https://resend.com/api-keys](https://resend.com/api-keys)
   - Add your email address where you want to receive contact form submissions
   - Configure the from email (must be a verified domain in Resend)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery. To set it up:

1. Sign up for a free Resend account at [https://resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file as `RESEND_API_KEY`
4. Add your email address as `CONTACT_TARGET_EMAIL`
5. For the `RESEND_FROM_EMAIL`, you can use:
   - `onboarding@resend.dev` (Resend's default domain - works immediately)
   - Or verify your own domain in Resend and use `contact@yourdomain.com`

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

Make sure to add your environment variables in your deployment platform's settings.
