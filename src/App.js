import React from "react";
import { Routes, Route } from 'react-router'
import Enter from "./Pages/Enter.js";
import Questions from "./Pages/Questions.js";
import Fitness from './Pages/Fitness.js';
import Fitness2 from "./Pages/Fitness2.js";
import Run from "./Pages/Run.js";
import Box from "./Pages/Box.js";
import NoFitness from './Pages/NoFitness.js';
import BangTown from './Pages/BangTown.js'
import Breakfast from "./Pages/Breakfast.js";
import PostMeal from "./Pages/PostMeal.js";
import Activity from "./Pages/Activity.js";
import FunPage from "./Pages/FunPage.js";


import "./App.css";

const App = () => {
  console.log("Made with ❤️ by Gracie McGuire");
  console.log( "github.com/graciemcguire 🏝" );
  
  return (
    <header className="App-header">
      <Routes>
        <Route path="/questions" element={<Questions />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/fitness2" element={<Fitness2 />} />
        <Route path="/run" element={<Run />} />
        <Route path="/box" element={<Box />} />
        <Route path="/nofitness" element={<NoFitness />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/postmeal" element={<PostMeal />} />
        <Route path="/bangtown" element={<BangTown />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/funpage" element={<FunPage />} />
        <Route path="/*" element={<Enter />} />
      </Routes>
    </header>
  );
}

export default App;
