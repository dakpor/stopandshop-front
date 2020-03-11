import React from "react";
import "./App.css";
import setAuthToken from './utils/setAuthToken'


if (localStorage.token) {
	setAuthToken(localStorage.token)
}


function App() {
	return ( <
		div className = 'App' >
		<
		header className = 'App-header' >
		<
		p > Welcome to Stop and Shop < /p> < /
		header > {
			" "
		} <
		/div>
	);
}

export default App;