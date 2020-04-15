import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import AddProductForm from "./components/products/AddProductForm";

import PageNotFound from "./components/pages/PageNotFound";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import setAuthToken from "./utils/setAuthToken";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ProductState from "./context/product/ProductState";
import CartState from "./context/cart/CartState";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	return (
		<AuthState>
			<AlertState>
				<ProductState>
					<CartState>
						<Router>
							<Fragment>
								<Navigation />
								<div className='container'>
									<Alerts />
									<Switch>
										<PrivateRoute exact path='/' component={Home} />
										<PrivateRoute exact path='/add' component={AddProductForm} />
										<Route exact path='/register' component={Register} />
										<Route exact path='/login' component={Login} />
										<Route component={PageNotFound} />
									</Switch>
								</div>
							</Fragment>
						</Router>
					</CartState>
				</ProductState>
			</AlertState>
		</AuthState>
	);
}

export default App;
