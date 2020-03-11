const axios = require("axios");

const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common["x-auth-token"] = token;
	}

	delete axios.defaults.headers.common["x-auth-token"];
};

module.exports = setAuthToken;
