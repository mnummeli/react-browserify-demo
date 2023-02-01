'use strict';

import $ from 'jquery';

import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';

import Clock from './Clock.jsx';
import HelloForm from './HelloForm.jsx';

const TITLE = 'Hello from React';

function App() {
	return(
		<>
			<h1 className="w3-center">{ TITLE }</h1>
			<hr/>
			<Clock/>
			<hr/>
			<HelloForm/>
		</>
	);
}

$(() => {
	document.title = TITLE;
	const container = $('div#root')[0];
	const root = createRoot(container);
	root.render(<App/>);
});