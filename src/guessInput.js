import React from 'react';

export default function GuessInput(props){
	return (<div>
		<input type="number" min={0} max={100} value={props.value} onChange={e => props.onChange(e.target.value)}/>
		</div>);
}