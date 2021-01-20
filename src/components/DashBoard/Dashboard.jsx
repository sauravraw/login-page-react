import React, { Component } from "react";
import styles from "./DashBoard.module.css";

export default class Dashboard extends Component {
	render(props) {
		return (
			<>
				<div className="container" width="100%" height="100%">
					<h1 className={styles["dashboardh1"]}>
						Welcome to React DashBoard Page
					</h1>
					<p>Work in porgress</p>
					<br />
					<p>Sit tight</p>
				</div>
			</>
		);
	}
}
