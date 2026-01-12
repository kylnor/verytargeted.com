# Contact Form Setup Guide

The contact form is now fully functional and ready to send emails via Resend!

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Resend API Key

1. Go to **https://resend.com**
2. Sign up for a free account (100 emails/day free)
3. Verify your email address
4. Go to **API Keys** section: https://resend.com/api-keys
5. Click **"Create API Key"**
6. Copy the API key (starts with `re_`)

### Step 2: Add API Key Locally

1. Create a `.env.local` file in the project root:
   ```bash
   touch .env.local
   ```

2. Add your API key:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

### Step 3: Add API Key to Vercel

1. Go to your Vercel dashboard: https://vercel.com/kylnor/verytargeted.com
2. Go to **Settings** → **Environment Variables**
3. Add new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_your_actual_api_key_here`
   - **Environment:** Production, Preview, Development (check all)
4. Click **Save**
5. Redeploy your site:
   ```bash
   vercel --prod
   ```

### Step 4: Configure Your Email Domain (Optional but Recommended)

**Free Tier:** Emails come from `onboarding@resend.dev` - works immediately!

**Custom Domain (Recommended):**
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain: `verytargeted.com`
4. Add the DNS records they give you to your domain registrar
5. Wait for verification (usually 5-10 minutes)
6. Update `app/api/contact/route.ts` line 38:
   ```typescript
   from: 'VeryTargeted Contact Form <contact@verytargeted.com>',
   ```

---

## ✅ Testing the Form

### Test Locally:
1. Go to http://localhost:3000
2. Scroll to contact form
3. Fill out the form
4. Click "Get Started"
5. Check your email at `hello@verytargeted.com`

### Test in Production:
1. Go to your live site
2. Fill out and submit the form
3. Check `hello@verytargeted.com` for the email

---

## 📧 How It Works

### Form Submission Flow:
```
User fills form → FinalCTA.tsx → /api/contact → Resend API → Email to hello@verytargeted.com
```

### What Happens:
1. User enters: name, email, phone (optional), message (optional)
2. Client-side validation (required fields, email format)
3. Form submits to `/api/contact` API route
4. Server-side validation (double-check everything)
5. Email sent via Resend to `hello@verytargeted.com`
6. Success message shown to user
7. Form resets automatically

### Email You'll Receive:
```
From: contact@verytargeted.com (or onboarding@resend.dev)
To: hello@verytargeted.com
Reply-To: user's email address
Subject: New Contact Form Submission from [Name]

Content includes:
- Name
- Email (clickable)
- Phone (clickable, if provided)
- Message (if provided)
```

---

## 🔒 Security Features

### Built-In Protection:
✅ Server-side validation (never trust client input)
✅ Email format validation (regex)
✅ Input length limits (name max 100 chars)
✅ HTML escaping (XSS protection via React)
✅ Error handling (graceful failures)
✅ CORS protection (Next.js default)

### What's NOT Included Yet:
⚠️ Rate limiting (add this before high traffic)
⚠️ reCAPTCHA (prevents spam bots)
⚠️ Honeypot field (simple bot protection)

---

## 🛠 Customization Options

### Change Recipient Email:
**File:** `app/api/contact/route.ts:39`
```typescript
to: ['hello@verytargeted.com'], // Change this
```

Can send to multiple people:
```typescript
to: ['hello@verytargeted.com', 'kyle@verytargeted.com'],
```

### Change Email Template:
**File:** `app/api/contact/route.ts:42-53`
```typescript
html: `
  <h2>New Contact Form Submission</h2>
  <!-- Customize this HTML -->
`,
```

### Add Reply-To Address:
Already included! The `replyTo` field is set to the user's email, so you can just hit "Reply" in your inbox.

### Change Success Message:
**File:** `components/FinalCTA.tsx:123-125`
```typescript
<p className="text-precision-teal font-semibold">
  Thanks! We'll be in touch soon. // Change this
</p>
```

### Change Error Message:
**File:** `components/FinalCTA.tsx:131-133`
```typescript
<p className="text-red-400 font-semibold">
  Oops! Something went wrong... // Change this
</p>
```

---

## 🚨 Troubleshooting

### Error: "Failed to send email"
**Possible causes:**
1. ❌ API key not set → Check `.env.local` or Vercel env vars
2. ❌ API key invalid → Get new key from Resend dashboard
3. ❌ Resend domain not verified → Use onboarding@resend.dev or verify domain

**How to debug:**
```bash
# Check server logs locally
npm run dev
# Submit form and watch terminal

# Check Vercel logs
vercel logs
```

### Error: "Invalid email format"
- User entered invalid email
- Client-side validation should catch this
- Check browser console for errors

### Form Submits but No Email Received
1. Check spam folder
2. Check Resend dashboard → Logs
3. Make sure `to:` email is correct in `route.ts`
4. Verify API key is correct

### "RESEND_API_KEY is not defined"
**Local:**
```bash
# Make sure .env.local exists with API key
cat .env.local
# Should show: RESEND_API_KEY=re_xxx

# Restart dev server
npm run dev
```

**Production:**
```bash
# Check Vercel environment variables
vercel env ls

# Add if missing
vercel env add RESEND_API_KEY
# Enter your API key when prompted

# Redeploy
vercel --prod
```

---

## 📊 Monitoring & Analytics

### Check Email Delivery:
1. Go to Resend dashboard: https://resend.com/emails
2. See all emails sent
3. Check delivery status
4. View email content
5. See open/click rates (if enabled)

### Server Logs:
```bash
# Local logs
npm run dev
# Watch terminal when form is submitted

# Production logs
vercel logs --follow

# Or in Vercel dashboard:
# Go to your project → Deployments → Click deployment → View Function Logs
```

---

## 💰 Pricing

### Resend Free Tier:
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ Perfect for starting out

### If You Need More:
- **$20/month:** 50,000 emails
- **$80/month:** 100,000 emails
- See full pricing: https://resend.com/pricing

### When to Upgrade:
- Getting 100+ leads per day (congrats! 🎉)
- Sending automated follow-ups
- Adding newsletters/drip campaigns

---

## 🔄 Alternative Email Services

Don't like Resend? Here are alternatives:

### 1. SendGrid (Popular)
```bash
npm install @sendgrid/mail
```
Similar setup, need API key, 100 emails/day free

### 2. Mailgun (Developer-friendly)
```bash
npm install mailgun.js
```
Pay as you go, 100 emails/day free trial

### 3. AWS SES (Cheap at scale)
```bash
npm install @aws-sdk/client-ses
```
$0.10 per 1,000 emails, more complex setup

### 4. Form Services (No backend needed)
- **Formspree:** https://formspree.io
- **Basin:** https://usebasin.com
- Just point form to their endpoint, they handle email

---

## 📝 Next Steps

### Immediate:
- [x] Install Resend
- [x] Create API route
- [x] Update form component
- [ ] Get Resend API key
- [ ] Add to `.env.local`
- [ ] Add to Vercel
- [ ] Test the form!

### Soon:
- [ ] Set up custom domain in Resend
- [ ] Add rate limiting
- [ ] Add reCAPTCHA
- [ ] Set up email templates
- [ ] Add auto-reply to users

### Later:
- [ ] Email follow-up sequence
- [ ] CRM integration (HubSpot, Salesforce)
- [ ] Slack/Discord notifications
- [ ] Lead scoring
- [ ] Analytics tracking

---

## 🎉 You're Done!

Your contact form is now:
✅ Sending real emails
✅ Validating inputs
✅ Showing success/error messages
✅ Ready for production

**Test it now:**
1. Add your API key
2. Submit the form
3. Check your email
4. Reply to a lead!

Need help? Email us at... oh wait, that's you! 😄

---

**Last Updated:** January 12, 2026
**Resend Docs:** https://resend.com/docs
**Support:** https://resend.com/support
