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
      <h1>π</h1>
      <QuestionLink to="/bangtown">π π Bang Town! π π </QuestionLink>
      <QuestionLink to="/activity">π½ π€ΈββοΈKeep the Day Goin! π½ π€ΈββοΈ</QuestionLink>
    </div>
  );
}

export default FunPage;
