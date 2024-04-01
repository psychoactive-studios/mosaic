import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: req.body });
  }

  const { _type, comment, email, fullName, approvalStatus } = req.body;

  if (_type === "comment" && approvalStatus === true) {
    const message = {
      to: email,
      from: "josh@psychoactive.co.nz", // change to ara taiohi later
      subject: "Your comment on Mosaic Cards has been approved!",
      text: `Hello ${fullName}, we are just lettting you know that your comment: "${comment}" has been approved. Thank you for contributing!`,
    };

    try {
      await sendgrid.send(message);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(200).json({ message: "No action needed" });
  }
}
