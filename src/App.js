import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./components/HomeScreen";
function App() {
  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
