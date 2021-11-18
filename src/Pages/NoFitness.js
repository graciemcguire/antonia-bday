import React from "react";
import { QuestionLink } from '../StyledComponents/Links'

const NoFitness = () => {
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
        <h1> 🥯 🥯 No Fitness!!!! 🥯 🥯 </h1>
      </marquee>
      <p>
        let's have a nice no fitness day! Are you hungry or do you want to go to
        bang town?
      </p>
      <QuestionLink to="/breakfast"> 🥯 🥯 Brekkie Time 🥯 🥯 </QuestionLink>
      <QuestionLink to="/bangtown">😛 🍑 Bang Town! 😛 🍑 </QuestionLink>
    </section>
  );
};

export default NoFitness;
