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

  const [newUser, setNewUser] = useState("");

  const sorted_players = [...players].sort(
    sort === "name" ? compare_name : compare_score
  );

  // setPlayers(sorted_players);

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

  const addSortingMethod = (value) => {
    setSort(value);
    // console.log("DropDown was changed", value);
  };

  // useEffect(() => {
  //   const sorted_players = [...players].sort(
  //     sort === "name" ? compare_name : compare_score
  //   );
  //   setPlayers(sorted_players);
  // }, [sort]);

  // console.log(sort, "this is the sorting method");
  const inputChange = (value) => {
    setNewUser(value);
  };

  const addPlayer = () => {
    const newPlayerObject = {
      id: Math.random(),
      name: newUser,
      score: 0,
    };
    // console.log(newPlayerObject, "this is the new player");
    setPlayers([...players, newPlayerObject]);
    setNewUser("");
  };
  // console.log(players, "this is palyers");

  return (
    <div>
      <div>
        {sorted_players.map((player) => {
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
      <div>
        <input
          type={"text"}
          value={newUser}
          placeholder={"Write your name"}
          onChange={(event) => {
            inputChange(event.target.value);
          }}
        />
        <button onClick={addPlayer}>Click</button>
      </div>
    </div>
  );
}
