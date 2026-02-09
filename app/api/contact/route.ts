import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = {
  name?: unknown
  email?: unknown
  message?: unknown
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : ''
  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const message = typeof payload.message === 'string' ? payload.message.trim() : ''

  const errors: Record<string, string> = {}

  if (!name) errors.name = 'Name is required.'
  if (!email) errors.email = 'Email is required.'
  if (email && !emailRegex.test(email)) errors.email = 'Email is invalid.'
  if (!message) errors.message = 'Message is required.'

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: 'Thanks for reaching out',
      text: `Hi ${name},\n\nThanks for your message! I received it and will get back to you soon.\n\nYour message:\n${message}\n\nBest regards,\nDaniel`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 }
    )
  }
}
