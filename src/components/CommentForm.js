import { useState } from "react";
import { pathwaysData } from "@/data/pathwaysData";

const CommentForm = () => {
  const [fullName, setFullName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [pathway, setPathway] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const [formOpen, setFormOpen] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

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

      setShowSuccessMsg(true);
      resetForm();

      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 3000);

      // error handling
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFullName("");
    setOrganisation("");
    setEmail("");
    setComment("");
    setPathway("");
    setAnonymous(false);
    setIsLoading(false);
    setError(null);
  };

  const handleCancel = () => {
    setFormOpen(false);
    resetForm();
  };

  const validateForm = () => {
    return (
      fullName.trim() !== "" && email.trim() !== "" && comment.trim() !== ""
    );
  };

  return (
    <div className="comment-form-wrapper">
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onClick={() => setFormOpen(true)}
          placeholder="Add a comment..."
          required
        ></textarea>
        {formOpen && (
          <>
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
            <select
              value={pathway}
              onChange={(e) => setPathway(e.target.value)}
              required
            >
              <option className="form-label" value="">
                Select a pathway to give feedback on...
              </option>
              <option value="General feedback on Mosaic">
                General feedback on Mosaic
              </option>
              {pathwaysData.map((item) => (
                <option
                  key={item.id}
                  value={`Mosaic Pathway on ${item.title}`}
                >{`Mosaic Pathway on ${item.title}`}</option>
              ))}
            </select>

            <div className="form-closing-wrapper flex">
              <div className="anonymous-checkbox-wrapper align-left">
                <label className="form-label">Post anonymously</label>
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                />
              </div>
              <div className="submit-wrapper">
                <div className="cancel-btn pointer" onClick={handleCancel}>
                  <p className="medium">Cancel</p>
                </div>
                <button
                  className={`submit-btn ${validateForm() ? "pointer" : ""}`}
                  type="submit"
                  disabled={isLoading || !validateForm()}
                  style={{ opacity: validateForm() ? "1" : "0.5" }}
                >
                  {isLoading ? "Posting..." : "Comment"}
                </button>
              </div>
            </div>
            <p className="success-msg">
              {showSuccessMsg ? "Comment submitted successfully!" : null}
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default CommentForm;
