import React from 'react';
import FeedbackArea from './feedbackArea';
import GuessCounter from './guessCounter';
import GuessHistory from './guessHistory';
import NewGameButton from './newGameButton';
import GuessEntryForm from './guessEntryForm';
import './index.css';

export default class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			answer: Math.floor(Math.random()*99) + 1,
			guess:0,
			feedback: "Make a Guess",
			guessHistory: [],
			guessCounter: 0,
			//submittable keeps you from clicking submit without
			//changing the input
			submittable: false
		}
	}

	evaluateGuess(guess){
		let feedback;

		if(this.state.guess === this.state.answer){
			feedback = "Correct!"
		}

		else if(Math.abs(this.state.guess - this.state.answer) < 10){
			feedback = "Hot"
		}

		else{
			feedback = "Cold"
		}

		let history = this.state.guessHistory;
		history.push(this.state.guess);

		this.setState({
			guess: this.state.guess,
			answer: this.state.answer,
			feedback: feedback,
			guessHistory: history,
			guessCounter: this.state.guessCounter + 1,
			submittable: false
		})
	}

	inputChange(input){
		this.setState({
			guess: parseInt(input,10),
			answer: this.state.answer,
			feedback: this.state.feedback,
			guessHistory: this.state.guessHistory,
			guessCounter: this.state.guessCounter,
			submittable: true
		})
	}

	resetGame(){
		this.setState({
			guess: 0,
			answer: Math.floor(Math.random()*99) + 1,
			feedback: "Make a Guess",
			guessHistory: [],
			guessCounter: 0
		})
	}

	render(){
		return (
			<div>
			<h1>Hot or Cold?{this.state.answer}</h1>
			<NewGameButton onClick={(_)=>this.resetGame()}/>
			<FeedbackArea feedback={this.state.feedback}/>
			<GuessEntryForm 
				onSubmit={(_) => {if(this.state.submittable){this.evaluateGuess()}}} 
				onChange={value=>this.inputChange(value)}
			/>
			<GuessCounter counter={this.state.guessCounter}/>
			<GuessHistory history={this.state.guessHistory}/>
			</div>
		)
	}
}