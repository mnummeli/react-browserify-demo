'use strict';

import React, {useEffect, useReducer} from 'react';
import * as dateFormat from 'date-format';

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

export default Clock;