'use strict';

import $ from 'jquery';

import React, {useState} from 'react';

function Greeting(props) {
	const elem = props.visible ? <h2 className="w3-center">{props.greeting}</h2> : null;
	return(elem);
}

function HelloForm() {
	const [greetingVisible, toggleGreetingVisible] = useState(false);
	const [name, setName] = useState('');
	const [greeting, setGreeting] = useState('');
	
	function submitForm(event) {
		event.preventDefault();
		$.get(`/hello/${name}`, data => {
			setGreeting(data.message);
			setName('');
			toggleGreetingVisible(true);
		});
	}
	
	function handleChange(event) {
		setName(event.target.value);
	}
	
	return(
		<>
			<div className="w3-container">
				<h2>Hello Form</h2>
			</div>
			<form className="w3-container" onSubmit={submitForm}>
  				<p>
  					<label htmlFor="name">First Name</label>
  					<input 
  							id="name"
  							name="name"
  							value={name}
  							onChange={handleChange}
  							className="w3-input"
  							type="text"
  					/>
  				</p>
  				<p>
  					<button
  						className="w3-btn w3-blue w3-round"
  						type="submit"
  					>
  					Submit
  					</button>
  				</p>
			</form>
			<Greeting visible={greetingVisible} greeting={greeting}/>
		</>
	);
}

export default HelloForm;