import { useState } from "react";
import { Board } from "./components/Board";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App h-screen bg-gray-200">
      <Header />

      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
