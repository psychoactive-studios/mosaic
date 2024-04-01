export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "organisation",
      title: "Organisation",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "pathway",
      title: "Pathway",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "anonymous",
      title: "Anonymous",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "isApproved",
      title: "Approved",
      type: "boolean",
      description: "Comments will only appear on the site once approved.",
      initialValue: false,
    },
  ],
};
