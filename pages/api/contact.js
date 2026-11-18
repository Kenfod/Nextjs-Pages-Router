// import { supabase } from "@/lib/supabase";

// export default async function handler(req, res) {
//   if (req.method !== "POST")
//     return res.status(405).json({
//       success: false,
//       message: "Please make a POST request!",
//     });

//   const contactData = JSON.parse(req.body);

//   const { error } = await supabase.from("contact").insert([contactData]);

//   //Error message
//   if (error)
//     return res.status(500).json({
//       success: false,
//       message: "Could not send your message. Please try again!",
//     });

//   //Success message
//   res.status(200).json({
//     success: true,
//     message: "Thanks for your message! We will be in touch soon!",
//   });
// }
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

  const { error } = await supabase.from("contact").insert([contactData]);

  // Error message (with return statement to halt execution)
  if (error) {
    return res.status(500).json({
      success: false,
      message: "Could not send your message. Please try again!",
    });
  }

  // Success message
  return res.status(200).json({
    success: true,
    message: "Thanks for your message! We will be in touch soon!",
  });
}
