import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { firstName, lastName, email, organisation, message } = await request.json()

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const clientEmail = process.env.CLIENT_EMAIL || 'MarcCampbell@mccoachingconsultancyltd.onmicrosoft.com'

    await resend.emails.send({
      from: 'M.C. Coaching Consultancy <onboarding@resend.dev>',
      to: clientEmail,
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName || ''}`.trim(),
      html: `
        <table style="font-family: sans-serif; max-width: 600px;">
          <tr><td style="padding: 8px 0;"><strong>Name:</strong></td><td>${firstName} ${lastName || ''}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
          ${organisation ? `<tr><td style="padding: 8px 0;"><strong>Organisation:</strong></td><td>${organisation}</td></tr>` : ''}
          <tr><td style="padding: 8px 0;" colspan="2"><strong>Message:</strong><br/><br/>${message.replace(/\n/g, '<br/>')}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    )
  }
}
