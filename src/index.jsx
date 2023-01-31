'use strict';

import $ from 'jquery';

import React, {useEffect, useReducer} from 'react';
import {createRoot} from 'react-dom/client';
import * as dateFormat from 'date-format';

const TITLE = 'Hello from React';

function Clock() {
	const [dateStr, dispatch] = useReducer(() => {
		return dateFormat.asString('hh:mm:ss', new Date());
	}, '00:00:00');
	
	useEffect(() => {
		const tick = setInterval(dispatch, 100);
		return () => clearInterval(tick);
	}, []);
	
	return(
		<h2 className="w3-center">{dateStr}</h2>
	);
}

function App() {
	return(
		<>
			<h1 className="w3-center">{ TITLE }</h1>
			<hr/>
			<Clock/>
		</>
	);
}

$(() => {
	document.title = TITLE;
	const container = $('div#root')[0];
	const root = createRoot(container);
	root.render(<App/>);
});