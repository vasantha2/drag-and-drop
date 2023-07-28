import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1 style={{ padding: "3px", fontFamily: "serif", fontSize: "20px" }}>
          Drag and Drop
        </h1>
        <Sidebar />
      </div>
    </DndProvider>
  );
}

export default App;
