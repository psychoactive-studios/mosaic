import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";

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
      const comments = await client.fetch(query);
      setComments(comments);
    };

    fetchComments();
  }, []); // Effect runs on component mount

  return (
    <div>
      <h2>Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.comment}</p>
            <p>By: {comment.anonymous ? "Anonymous" : comment.fullName}</p>
            {/* Display other fields as needed */}
          </div>
        ))
      ) : (
        <p>No comments to display.</p>
      )}
    </div>
  );
};

export default Comments;
