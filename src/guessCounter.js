import React from 'react';

export default function GuessCounter(props){
	return <h4>Guesses: {props.counter || "0"}</h4>;
}