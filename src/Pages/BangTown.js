import React from 'react'
import { QuestionLink } from "../StyledComponents/Links.js";

function BangTown() {
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
        <h1> π π π π Bang Town! π π π π </h1>
        <h1> π π π π Bang Town! π π π π </h1>
        <h1> π π π π Bang Town! π π π π </h1>
        <h1> π π π π Bang Town! π π π π </h1>
        <h1> π π π π Bang Town! π π π π </h1>
        <h1> π π π π Bang Town! π π π π </h1>
        <h1> π π π π Bang Town! π π π π </h1>
        <h1> π π π π Bang Town! π π π π </h1>
        <h1> π π π π Bang Town! π π π π </h1>

      </marquee>

      <QuestionLink to="/activity" >π½ π€ΈββοΈ Keep the Day Goin!π½ π€ΈββοΈ</QuestionLink>
    </div>
  );
}

export default BangTown
