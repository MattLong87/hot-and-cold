import React from 'react';
import FeedbackArea from './feedbackArea';
import GuessCounter from './guessCounter';
import GuessHistory from './guessHistory';
import NewGameButton from './newGameButton';
import GuessEntryForm from './guessEntryForm';

export default class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			answer: Math.floor(Math.random()*99) + 1,
			guess:0,
			feedback: "Make a Guess"
		}
	}

	evaluateGuess(guess){
		if(this.state.guess === this.state.answer){
			this.setState({
				guess: 0,
				answer: this.state.answer,
				feedback: "Correct"
			})
		}
	}

	inputChange(input){
		this.setState({
				guess: parseInt(input,10),
				answer: this.state.answer,
				feedback: this.state.feedback
			})
	}

	render(){
		return (
			<div>
			<h1>Hot or Cold?{this.state.answer}</h1>
			<NewGameButton />
			<FeedbackArea feedback={this.state.feedback}/>
			<GuessEntryForm onSubmit={(_) => this.evaluateGuess()} onChange={value=>this.inputChange(value)}/>
			<GuessCounter />
			<GuessHistory />
			</div>
		)
	}
}