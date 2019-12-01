import React from "react";
import "../styles/App.css";
import "../styles/App.scss";
import { Button } from "react-bulma-components";
import CharCard from "./CharacterCard";
// import AppRouter from "./Router";

function App() {
  return (
    <div className="App">
      <CharCard />
    </div>
  );
}

export default App;
