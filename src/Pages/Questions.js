import React, { useState } from 'react'
// import { Fitness, NoFitness } from './PageIndex'
import Fitness from "./Fitness.js";
import NoFitness from "./NoFitness.js";
import { QuestionLink } from '../StyledComponents/Links.js';

function Questions() {
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
      <h1>Happy birthday my babe!!!!!</h1>
      <p>
        I thought we could start the day today by being fitness babes. But
        because youre sick I'll leave it up to you...
      </p>
      <QuestionLink to="/fitness"> 🏃‍♀️ Fitness? 🥊 </QuestionLink>
      <QuestionLink to="/nofitness"> 😶‍🌫️  No Fitness 😶‍🌫️ </QuestionLink>
    </section>
  );
}

export default Questions
