import React from 'react'
import { QuestionLink } from "../StyledComponents/Links.js";

function PostMeal() {
  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        "flex-direction": "column",
        "flex-wrap": "wrap",
        "align-items": "center",
        "justify-content": "center",
      }}
    >
      <h1>We are full probs now, nice 👍 </h1>
      <p>shall we....</p>
      <QuestionLink to="/bangtown">😛 🍑 Bang Town! 😛 🍑 </QuestionLink>
      <QuestionLink to="/activity">🗽 🤸‍♀️Keep the Day Goin! 🗽 🤸‍♀️</QuestionLink>
    </div>
  );
}

export default PostMeal
