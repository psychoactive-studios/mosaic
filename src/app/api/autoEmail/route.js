import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { comment } = req.body;

  const message = {
    to: comment.email,
    from: "admin@arataiohi.org.nz",
    subject: "Your comment on Mosaic Cards has been approved!",
    text: `Hello ${comment.fullName}, we are just lettting you know that your comment has been approved. Thank you for contributing!`,
  };

  try {
    await sendgrid.send(message);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    return res
      .status(error.statusCode || 500)
      .json({ error: "Failed to send email" });
  }
};
