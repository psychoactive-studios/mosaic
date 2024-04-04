import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { comment, email, fullName, pathway } = await req.json();
  const url = "https://arataiohi.org.nz/";

  const message = {
    to: email,
    from: "josh@psychoactive.co.nz", // change to ara taiohi later
    subject: "Your comment on Mosaic Cards has been approved!",
    // text: `Kia ora ${fullName}, we are just lettting you know that your comment: "${comment}" has been approved. Thank you for contributing!`,
    text: `Kia ora ${fullName},
          Great news! Your feedback on the ${pathway} has been approved and added to the Mosaic website at: ${url}. We’re thrilled to share your comments with the community.
          ${comment}
          It’s voices like yours that fuel our journey towards a more understanding, inclusive, and vibrant Aotearoa. 
          Thanks for being a part of this conversation and helping us all grow together.
          The Mosaic Team`,
  };
  try {
    await sendgrid.send(message);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error.toString(),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
