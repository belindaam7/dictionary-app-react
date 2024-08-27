import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <h1>Definition:</h1>
        <h2>{props.results.word}</h2>
        <p>{props.results.meanings[0].definitions[0].definition}</p>
      </div>
    );
  } else {
    return <div>No definitions found</div>;
  }
}
