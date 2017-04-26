import React from 'react';
import GuessInput from './guessInput';
import SubmitGuessButton from './submitGuessButton';

export default function GuessEntryForm(props){
	return (
		<form onSubmit={event => {
			event.preventDefault();
			props.onSubmit();
			}
		}>
		<GuessInput onChange={value=>{props.onChange(value)}}/>
		<SubmitGuessButton />
		</form>
		)
}