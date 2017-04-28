import React from 'react';

export default function guessHistory(props){
	const guesses = props.history.map((guess, i) =>{
		return <span className="guess" key={i}>{guess}</span>
	})
	return (
		<div>
		<h5>Guess History:</h5>
		<h6>{guesses}</h6>
		</div>
		)
}