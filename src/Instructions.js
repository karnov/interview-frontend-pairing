import React from "react";

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>Kata: the game of Three Men's Morris</h2>
      <p>
        The source of the kata is the ancient game of Three Men's Morris,
        similar to Noughts and Crosses, of which you can find out more{" "}
        <a href="https://en.wikipedia.org/wiki/Three_men%27s_morris">here</a>.
      </p>
      <p>
        Each player has three pieces. The winner is the first player to align
        their three pieces on a line drawn on the board. There are 3 horizontal
        lines, 3 vertical lines and 2 diagonal lines.
      </p>
      <ul>
        <li>There are two players, blue and green. Each has 3 pieces.</li>
        <li>
          The board is empty to begin the game, and players take turns placing
          their pieces on empty intersections.
        </li>
        <li>
          Once all pieces are placed (assuming there is no winner by then), play
          proceeds with each player moving one of their pieces per turn.
        </li>
        <li>
          A piece cannot be placed on an opponents piece. A piece can only move 
          to an adjacent spot.
        </li>
        <li>
          As soon as a player places a piece that gives them a row of three,
          either horizontally, vertically or diagonally, they have won.
        </li>
      </ul>
      <p>
      We created board in simple html/css which you can reuse in your solution.
      </p>
    </div>
  );
};

export default Instructions;
