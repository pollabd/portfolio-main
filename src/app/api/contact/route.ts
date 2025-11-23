import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Get the access key from environment variable
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the site administrator." },
        { status: 500 }
      );
    }

    // Add the access key to form data
    formData.append("access_key", accessKey);

    // Submit to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // Check if response is ok and is JSON
    if (!response.ok) {
      const text = await response.text();
      console.error("Web3Forms API error response:", text);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: response.status }
      );
    }

    // Try to parse as JSON
    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error("Web3Forms returned non-JSON response:", text);
      return NextResponse.json(
        { error: "Unexpected response from email service." },
        { status: 500 }
      );
    }

    if (data.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    } else {
      console.error("Web3Forms API error:", data);
      return NextResponse.json(
        { error: data.message || "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send your message right now." },
      { status: 500 }
    );
  }
}
