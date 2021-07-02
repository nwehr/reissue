import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';

import store from "./state/store"

import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

ReactDOM.render(
	<Auth0Provider domain="dev-qbsxo4re.auth0.com" clientId="EYSIZKcUxrh9Xpqlm6WwjiezS6v6rfXI" redirectUri={window.location.origin + "/reissue"}>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</Auth0Provider>
	, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
