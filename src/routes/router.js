import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

// Pages

export default class Router extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact Component={Home} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
