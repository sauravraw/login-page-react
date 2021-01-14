import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";

// Pages

export default class Router extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route path="/login" exact Component={Login} />
						<Route path="/register" exact Component={Register} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
