import React from 'react'
import { QuestionLink } from "../StyledComponents/Links.js";

const Fitness = () => {
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
      <marquee>
        <h1>🏃‍♀️ 🥊 🏃‍♀️ 🥊 🏃‍♀️ Fitness!!!! 🏃‍♀️ 🥊 🏃‍♀️ 🥊 🏃‍♀️</h1>
      </marquee>
      <p>
        okay okay my ripped babelaid! fitness time it is! go get your spiffy lil
        workout clothes on and lets make some heckin moves!
      </p>
      <p>
        <QuestionLink to="/fitness2">
          🧦  Once you're dressed click here. 🧦
        </QuestionLink>
      </p>
    </section>
  );
}

export default Fitness
