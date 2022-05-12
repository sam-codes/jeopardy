import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [gameId, setGameId] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home changeGameId={setGameId} />} />
        <Route path="board" element={<Board gameId={gameId} />} />
      </Routes>
    </div>
  );
}

export default App;
