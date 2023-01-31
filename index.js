#!/usr/bin/env node

'use strict';

import express from 'express';

const app = express();
const PORT = 3000;

let counter = 0;

function greet(req, res) {
	counter ++;
	let name = 'World';
	if(req.params.name) {
		name = req.params.name;
	}
	res.json({
		id: counter,
		message: `Hello ${name}!`
	});
}

/* RESTful service from same port as main page */
app.get('/hello', greet);
app.get('/hello/:name', greet);

app.use('/', express.static('dest'));

app.listen(PORT, () => {
	console.log(`React-Browserify Demo app listening on port ${PORT}.`)
});