import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "./rating";

const Comment = ({ courseId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (!courseId) {
          console.log("Course ID is undefined");
          return;
        }

        const response = await axios.get(`http://localhost:4000/commentaire/commentaires/${courseId}`);
        console.log("API response:", response.data);
        setCommentList(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [courseId]);

  const commentCount = commentList.length;
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return (
    <div className="comments">
      <h4 className="title-border">
        {commentCount} Commentaire{commentCount !== 1 ? "s" : ""}
      </h4>
      <ul className="comment-list">
        {commentList.map((comment, index) => (
          <li className="comment" key={index}>
            <div className="com-thumb">
              {comment.user && comment.user.image && (
                <img src={comment.user.image} alt="User" />
              )}
            </div>
            <div className="com-content">
              <div className="com-title">
                <div className="com-title-meta">
                  <h6>{`${
                    comment.user
                      ? `${comment.user.firstname} ${comment.user.lastname}`
                      : "Utilisateur inconnu"
                  }`}</h6>
                  <span style={{ fontSize: "13px" }}>
                    {new Intl.DateTimeFormat("fr-FR", options).format(
                      new Date( comment.createdAt)
                    )}
                  </span>
                </div>
                <Rating />
              </div>
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
