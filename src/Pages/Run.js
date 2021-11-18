import React from 'react'
import { QuestionLink } from "../StyledComponents/Links.js";

function Run() {
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
        <h1> 🏃‍♀️ 🏃‍♀️ ok we go run!! 🏃‍♀️ 🏃‍♀️ </h1>
      </marquee>

      <p>after run come back here and we will have </p>
      <QuestionLink to="/breakfast"> 🥯 🥯 Brekkie Time 🥯 🥯 </QuestionLink>
    </div>
  );
}

export default Run
