import React, { Component } from "react";
import url from "../ApiCall";
import Dashboard from "../DashBoard/Dashboard";
import LoginForm from "./LoginForm";
import styles from "../../styles/style.css";

class Login extends Component {
	state = {
		status: "",
	};
	submitForm = (event) => {
		event.preventDefault();
		let form = event.target;
		let formObj = {
			email: form.email.value,
			password: form.password.value,
		};
		fetch(`${url}users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			body: JSON.stringify(formObj),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				if (data.data) {
					this.setState({ status: "Successful" });
					form.reset();
					alert("Login Successfully");
					console.log(this.props, "Saurav");
					console.log(data);
				} else {
					console.error();
				}
			})
			.catch((err) => {
				alert(`${form.email.value}, Please try again :)`);
				alert(err);
				console.log(err);
			});
	};
	render() {
		return (
			<>
				{this.state.status === "Successful" ? (
					<Dashboard />
				) : (
					<form onSubmit={this.submitForm}>
						<LoginForm />
						<div className={styles["footer"]}>
							<button type="submit" value="submit" className="btn">
								Login
							</button>
							<button type="reset" value="reset" className="btn">
								Reset
							</button>
						</div>
					</form>
				)}
			</>
		);
	}
}

export default Login;
