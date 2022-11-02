import Player from "./Player";
import { useState } from "react";

export default function Scoreboard() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Maria", score: 0 },
    { id: 2, name: "Karla", score: 0 },
    { id: 3, name: "Swen", score: 0 },
  ]);

  //   const displayMessage = (message) => {
  //     console.log("I was clicked", message);
  //   };

  const updateScore = (id) => {
    const updatedList = players.map((player) => {
      //Ternary operator to return new item
      return player.id === id ? { ...player, score: player.score + 1 } : player;
      //This is even smaller
      //   if (player.id === id) return { ...player, score: player.score + 1 };
      //   else {
      //     return player;
      //   }
    });

    setPlayers(updatedList);

    // //Find player to be updated
    // const playerToBeUpdated = players.find((player) => {
    //   return player.id === id;
    // });
    // //Increase the score by One

    // const updatedScore = players.map((player) => {
    //   if (player === playerToBeUpdated) {
    //     return { ...playerToBeUpdated, score: player.score + 1 };
    //   } else {
    //     return player;
    //   }
    // });
    // console.log(updatedScore, "this is updated");
  };

  return (
    <div>
      {players.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            updateScore={updateScore}
            // clickFunction={displayMessage}
          />
        );
      })}
    </div>
  );
}
