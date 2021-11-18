import React from "react";
import { QuestionLink } from "../StyledComponents/Links.js";

function Enter() {
  console.log("hello");
  return (
    <div
      className="App"
      style={{
        margin: 20,
        display: "flex",
        "flex-direction": "column",
        "flex-wrap": "wrap",
        "align-items": "center",
        "justify-content": "center",
      }}
    >
      <img src={'../antonia.png'} className="App-logo" alt="antonia" />
      <p> 🐓 Antonia's Big 27 Not Chicken Related Whatsoever Adventure BDay 🐓  </p>
      <QuestionLink to="/questions" style={{ 'border-radius': '5em',
  'width': '10em', 'background-color': 'black', 'height': '1.7em' }}> 💀 E N T E R 💀 </QuestionLink>
    </div>
  );
}

export default Enter;
