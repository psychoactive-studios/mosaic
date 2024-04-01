import { useState } from "react";

const CommentForm = () => {
  const [fullName, setFullName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [pathway, setPathway] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const doc = {
      _type: "comment",
      fullName,
      organisation,
      email,
      comment,
      pathway,
      anonymous,
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doc),
      });

      if (!response.ok) {
        throw new Error("Failed to submit comment. Please try again.");
      }

      // Handle success here
      alert("Comment submitted successfully");
      // Optionally, reset form fields here
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
          placeholder="Organisation"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
          required
        ></textarea>
        <input
          type="text"
          value={pathway}
          onChange={(e) => setPathway(e.target.value)}
          placeholder="Pathway"
        />
        <div>
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />
          <label>Post Anonymously</label>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
