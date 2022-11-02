export default function Player(props) {
  //Get the props from the parent
  const name = props.name;
  const score = props.score;
  const id = props.id;

  return (
    <div>
      <p>
        Player: {name}
        Score: {score}
        <button
          onClick={() => {
            props.updateScore(id);
          }}
        >
          Update Score
        </button>
        {/* Testing button */}
        {/* <button
          onClick={() => {
            props.clickFunction("I am Maria");
          }}
        >
          Click me!
        </button> */}
        {/* If You pass an argument, you cannot do it this way */}
        {/* <button onClick={props.clickFunction("I am Maria")}>Click me!</button> */}
      </p>
    </div>
  );
}
