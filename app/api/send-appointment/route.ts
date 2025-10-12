import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message } = body

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to the practice
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'contact@familydentalcare.ro',
      subject: `New Appointment Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1E40AF;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9fafb;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #1E40AF;
              }
              .value {
                margin-top: 5px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Appointment Request</h1>
              </div>
              <div class="content">
                <p>You have received a new appointment request from your website:</p>
                
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                
                ${message ? `
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
                ` : ''}
                
                <p style="margin-top: 30px;">
                  Please contact the patient as soon as possible to confirm their appointment.
                </p>
              </div>
              <div class="footer">
                <p>This email was sent from your Family Dental Care website contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Optionally send confirmation email to the patient
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: 'Appointment Request Received - Family Dental Care',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1E40AF;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9fafb;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .button {
                display: inline-block;
                background-color: #1E40AF;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 25px;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You, ${name}!</h1>
              </div>
              <div class="content">
                <p>We have received your appointment request and will contact you shortly to confirm your appointment.</p>
                
                <p>Our team will reach out to you at:</p>
                <ul>
                  <li>Phone: ${phone}</li>
                  <li>Email: ${email}</li>
                </ul>
                
                <p>If you have any urgent concerns, please don't hesitate to call us at <strong>0820.123.123</strong>.</p>
                
                <p style="margin-top: 30px;">We look forward to seeing you soon!</p>
                
                <p><strong>Family Dental Care</strong><br>
                Strada Maria Rosetti 26A<br>
                București 020487</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json(
      { message: 'Appointment request sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing appointment request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
