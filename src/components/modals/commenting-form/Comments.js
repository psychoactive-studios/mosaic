import React, { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { getInitials, getTimeFromNow } from "@/utils/utilFunctions";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const query = `*[_type == "comment" && isApproved == true]{
        _id,
        comment,
        fullName,
        organisation,
        email,
        pathway,
        anonymous,
        _createdAt
      }`;
      let comments = await client.fetch(query);
      comments = comments.sort(
        (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
      );

      setComments(comments);
    };

    fetchComments();
  }, []);

  return (
    <div className="comments-wrapper">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div className="comment flex" key={comment._id}>
            <div>
              <div className="initials">
                <p className="medium">
                  {comment.anonymous ? "AN" : getInitials(comment.fullName)}
                </p>
              </div>
            </div>
            <div className="comment-body">
              <div className="comment-top-half flex">
                <p className="medium">
                  {comment.anonymous ? "Anonymous" : comment.fullName}
                </p>
                <p
                  className="small-font"
                  style={{ textTransform: "lowercase" }}
                >
                  {getTimeFromNow(comment._createdAt)} · {comment.pathway}
                </p>
              </div>
              <div className="comment-bottom-half align-left">
                <p>{comment.comment}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No comments to display.</p>
      )}
    </div>
  );
};

export default Comments;
