import React from "react";
import { QuestionLink } from "../StyledComponents/Links.js";

function FunPage () {
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
      <h1>😘</h1>
      <QuestionLink to="/bangtown">😛 🍑 Bang Town! 😛 🍑 </QuestionLink>
      <QuestionLink to="/activity">🗽 🤸‍♀️Keep the Day Goin! 🗽 🤸‍♀️</QuestionLink>
    </div>
  );
}

export default FunPage;
