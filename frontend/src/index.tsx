import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ThemeContextProvider from '../src/context/ThemeContext';

ReactDOM.render(
	<ThemeContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeContextProvider>,

	document.getElementById('root')
);
