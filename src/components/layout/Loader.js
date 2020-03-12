import React, { Fragment } from "react";
import preloader from "./preloader.gif";
const Loader = () => {
	return (
		<Fragment>
			<img src={preloader} style={{ width: '200px', margin: 'auto', dispay: 'block'}} alt='Loading...' />
		</Fragment>
	);
};

export default Loader;
