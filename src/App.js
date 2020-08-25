import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="board-bg">
        <div className="board-wrapper">
          <div className="board-position board-position--row1 board-position--col1"></div>
          <div className="board-position board-position--row2 board-position--col1"></div>
          <div className="board-position board-position--row3 board-position--col1"></div>

          <div className="board-position board-position--row1 board-position--col2"></div>
          <div className="board-position board-position--row2 board-position--col2"></div>
          <div className="board-position board-position--row3 board-position--col2"></div>

          <div className="board-position board-position--row1 board-position--col3"></div>
          <div className="board-position board-position--row2 board-position--col3"></div>
          <div className="board-position board-position--row3 board-position--col3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
