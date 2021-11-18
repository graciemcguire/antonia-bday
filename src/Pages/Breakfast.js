import React from 'react'
import { QuestionLink } from "../StyledComponents/Links.js";

function Breakfast() {
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
      <p>okey okey breakfast time</p>
      <p>this is good bc your babe is hungry town</p>

      <QuestionLink to="/postmeal">
        🥓 🍏 Have a craving?? You choose! 🥓 🍏
      </QuestionLink>
      <QuestionLink to="/postmeal">
        ❓ 😈 ❓ Want me to pick??❓ 😈 ❓
      </QuestionLink>
      <div></div>
      <QuestionLink style={ {'margin-top': '80px' } } to='/postmeal'>After we eat click me!</QuestionLink>
    </div>
  );
}

export default Breakfast
