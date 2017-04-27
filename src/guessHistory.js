import React from 'react';

export default function guessHistory(props){
	const guesses = props.history.map((guess) =>{
		return <span className="guess">{guess}</span>
	})
	return (
		<div>
		<h5>Guess History:</h5>
		<h6>{guesses}</h6>
		</div>
		)
}