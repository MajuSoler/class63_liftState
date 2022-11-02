import { useEffect, useState } from "react";

import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Maria", score: 0 },
    { id: 2, name: "Karla", score: 0 },
    { id: 3, name: "Swen", score: 0 },
  ]);

  const [sort, setSort] = useState("name");

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
    const sorted_players = [...updatedList].sort(
      sort === "name" ? compare_name : compare_score
    );
    setPlayers(sorted_players);

    // setPlayers(updatedList);

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

  const addSortingMethod = (value) => {
    setSort(value);
    // console.log("DropDown was changed", value);
  };

  useEffect(() => {
    const sorted_players = [...players].sort(
      sort === "name" ? compare_name : compare_score
    );
    setPlayers(sorted_players);
  }, [sort]);

  // console.log(sort, "this is the sorting method");

  return (
    <div>
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
      <div>
        <p>Select a sorting method</p>
        <select
          onChange={(e) => {
            addSortingMethod(e.target.value);
          }}
        >
          <option value="name">Name </option>
          <option value="score">Score</option>
        </select>
      </div>
    </div>
  );
}
