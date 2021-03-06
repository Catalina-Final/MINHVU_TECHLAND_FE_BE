import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../../redux/actions/postActions";

const CommentForm = ({ postIdUrl }) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(postActions.commentOnPost(postIdUrl, { content }));

    setContent("");
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a comment</h3>
      </div>
      <form className="form my-1" onSubmit={e => handleSubmit(e)}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a comment"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

export default CommentForm;
