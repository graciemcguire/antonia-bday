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
      <h1>We are full probs now, nice π </h1>
      <p>shall we....</p>
      <QuestionLink to="/bangtown">π π Bang Town! π π </QuestionLink>
      <QuestionLink to="/activity">π½ π€ΈββοΈKeep the Day Goin! π½ π€ΈββοΈ</QuestionLink>
    </div>
  );
}

export default PostMeal
