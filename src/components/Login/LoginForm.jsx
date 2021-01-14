import React, { Component } from "react";
import image from "../../images/login.png";
class LoginForm extends Component {
	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Login</div>
				<div className="content">
					<div className="image">
						<img src={image} alt="Login" />
					</div>
					<div className="form">
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

export default LoginForm;
