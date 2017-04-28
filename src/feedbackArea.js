import React from 'react';

export default function FeedbackArea(props){
	let className = props.feedback === "Make a Guess" ? "gray" : props.feedback.toLowerCase();
	return <div><h3 className={`feedback-area  ${className}`}>{props.feedback}</h3></div>
}