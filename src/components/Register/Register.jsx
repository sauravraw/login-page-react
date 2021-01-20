import React, { Component } from "react";
import url from "../ApiCall";
import RegisterForm from "./RegisterForm";

class Register extends Component {
	submitForm = (event) => {
		event.preventDefault();
		let form = event.target;
		let formObj = {
			userName: form.userName.value,
			email: form.email.value,
			password: form.password.value,
		};
		console.log(formObj);
		fetch(`${url}users/signup`, {
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
				form.reset();
				alert(
					`${form.userName.value} registered Successfully...!!! with ${form.email.value} Id....!!!`
				);
				console.log(data);
				console.log(form.email.value);
			})
			.catch((err) => {
				alert(`${form.userName.value}, Please try again :)`);
				alert(err);
				console.log(err);
			});
	};
	render() {
		return (
			<>
				<form onSubmit={this.submitForm}>
					<RegisterForm />
					<div className="footer">
						<button type="submit" value="submit" className="btn">
							Register
						</button>
						<button type="reset" value="reset" className="btn">
							Reset
						</button>
					</div>
				</form>
			</>
		);
	}
}

export default Register;
