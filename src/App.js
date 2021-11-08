import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./components/HomeScreen";
import { Param } from "./components/Param";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<HomeScreen />} />
          <Route path="/param/:parametro/" element={<Param />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
