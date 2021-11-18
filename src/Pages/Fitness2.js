import React from 'react'
import { QuestionLink } from "../StyledComponents/Links.js";

function Fitness2() {
  return (
    <section
      style={{
        margin: 20,
        display: "flex",
        "flex-direction": "column",
        "flex-wrap": "wrap",
        "align-items": "center",
        "justify-content": "center",
      }}
    >
      <p>okey dokey! wanna go on a run or box?</p>
      <QuestionLink to="/run"> 🏃‍♀️ 🏃‍♀️ Run 🏃‍♀️ 🏃‍♀️ </QuestionLink>
      <QuestionLink to="/box"> 🥊  🥊 Box 🥊  🥊 </QuestionLink>
    </section>
  );
}

export default Fitness2
