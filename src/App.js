import React from "react";
import "./App.css";
import { Header } from "./components";
import { Posts } from "./containers";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-main">
        <Posts/>
      </section>
    </div>
  );
}

export default App;
