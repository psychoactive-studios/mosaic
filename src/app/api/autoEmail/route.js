import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { _type, comment, email, fullName, approvalStatus } = await req.json();

  // if (_type === "comment" && approvalStatus === true) {
  const message = {
    to: email,
    from: "josh@psychoactive.co.nz", // change to ara taiohi later
    subject: "Your comment on Mosaic Cards has been approved!",
    text: `Hello ${fullName}, we are just lettting you know that your comment: "${comment}" has been approved. Thank you for contributing!`,
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
  // }
}
