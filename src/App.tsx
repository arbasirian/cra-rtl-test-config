import React from "react";
import "./App.css";
import CounterComponent from "./components/counter/counter.component";

function App() {
  return (
    <div className="App">
      <CounterComponent defaultValue={0} description="Main Counter" />
    </div>
  );
}

export default App;
