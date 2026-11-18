import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Please make a POST request!",
    });
  }

  let contactData;

  try {
    // Handle both stringified payloads and pre-parsed JSON objects safely
    contactData =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Invalid request payload format.",
    });
  }

  // Extract and sanitize inputs
  const fullName = contactData?.fullName?.trim();
  const email = contactData?.email?.trim();
  const subject = contactData?.subject?.trim();
  const message = contactData?.message?.trim();

  // 1. Check for missing or blank required fields
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message:
        "There is a blank field. Ensure that all the above fields are filled correctly!",
    });
  }

  // 2. Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  // 3. Enforce reasonable length limits
  if (message.length > 2000) {
    return res.status(400).json({
      success: false,
      message: "Message should not exceed 2000 characters.",
    });
  }

  // Insert sanitized data into Supabase
  const { error } = await supabase
    .from("contact")
    .insert([{ fullName, email, subject, message }]);

  // Error message (with return statement to halt execution)
  if (error) {
    return res.status(500).json({
      success: false,
      message:
        "Could not send your message. Check your internet connection. Please try again!",
    });
  }

  // Success message
  return res.status(200).json({
    success: true,
    message: "Thanks for your message! We will be in touch soon!",
  });
}
