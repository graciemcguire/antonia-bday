import React from "react";
import { QuestionLink } from "../StyledComponents/Links.js";

function Activity () {

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
      <h1>activity time!!!!</h1>
      <p>Do you want to be......</p>
      <QuestionLink
        to="/funpage"
        title={"🎨 🎨 Creative 🎨 🎨"}
      >
        🎨 🎨 Creative 🎨 🎨
      </QuestionLink>
      <QuestionLink to="/funpage" activity="🧐 🧐 Educated 🧐 🧐 ">
        
        🧐 🧐 Educated 🧐 🧐
      </QuestionLink>
      <QuestionLink to="/funpage" activity="💅 💅 Pampered 💅 💅">
        
        💅 💅 Pampered 💅 💅
      </QuestionLink>
      <QuestionLink to="/funpage" activity="🍂 🍂 Outside 🍂 🍂">      
        🍂 🍂 Outside 🍂 🍂
      </QuestionLink>
      <QuestionLink to="/funpage" activity="🍷 🍷 Drinking 🍷 🍷">
        🍷 🍷 Drinking 🍷 🍷
      </QuestionLink>
      <QuestionLink to="/funpage" activity="🌮 🌮 Snacking 🌮 🌮">

        🌮 🌮 Snacking 🌮 🌮
      </QuestionLink>
      <QuestionLink to="/funpage" activity="😛 🍑 Bangin! 😛 🍑">
        😛 🍑 Bangin! 😛 🍑
      </QuestionLink>
    </div>
  );
}
export default Activity;