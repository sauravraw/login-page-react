import React, { Component } from "react";
import image from "../../images/register.png";

class RegisterForm extends Component {
	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Register</div>
				<div className="content">
					<div className="image">
						<img src={image} alt="Register" />
					</div>
					<div className="form">
						<div className="form-group">
							<input
								type="text"
								name="userName"
								required
								placeholder="UserName"
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								name="email"
								required
								placeholder="email@ex.com"
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								name="password"
								required
								placeholder="Password"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterForm;
