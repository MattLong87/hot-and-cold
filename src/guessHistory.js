import React from 'react';

export default function guessHistory(props){
	return (
		<div>
		<h5>Guess History:</h5>
		<h6>{props.history}</h6>
		</div>
		)
}