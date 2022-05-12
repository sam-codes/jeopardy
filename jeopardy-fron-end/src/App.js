import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
