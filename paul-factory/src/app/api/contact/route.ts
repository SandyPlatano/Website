import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Here you would typically send an email or save to a database
    // For now, we'll just log it and return success
    // You can integrate with services like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer
    // - Or save to a database

    console.log("Contact form submission:", {
      name,
      email,
      company: company || "Not provided",
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true,
        message: "Thank you for your message! I'll get back to you soon." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        error: "Something went wrong. Please try again later or contact me directly via email." 
      },
      { status: 500 }
    );
  }
}

