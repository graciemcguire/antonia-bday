import React from "react";
import { QuestionLink } from "../StyledComponents/Links.js";

function Box() {
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
      <marquee>
        <h1> 🥊 🥊  k we go box!!🥊 🥊  </h1>
      </marquee>

      <p>after boxing come back here and we will have </p>
      <QuestionLink to="/breakfast"> 🥯 🥯 Brekkie Time 🥯 🥯 </QuestionLink>
    </div>
  );
}

export default Box;
