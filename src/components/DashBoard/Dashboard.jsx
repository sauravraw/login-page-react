import React, { Component } from "react";
import styles from "./DashBoard.module.css";
export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1>Hold tight...!!!</h1>

				<h3>Work in progress</h3>

				<p>Watch blogs</p>
				<a
					href="https://react-blog-render.vercel.app/"
					className={styles.dashboarda}
				>
					DashBoard
				</a>
			</div>
		);
	}
}
