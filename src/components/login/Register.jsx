import React, { Component } from "react";

export class Register extends Component {
	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Register</div>
				<div className="content">
					<div className="image">{/* Image part */}</div>
					<div className="form">
						<div className="form-group">
							<input
								type="text"
								name="username"
								placeholder="UserName"
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								name="email"
								placeholder="email@ex.com"
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								name="password"
								placeholder="Password"
							/>
						</div>
					</div>
				</div>
				<div className="footer">
					<button type="button" className="btn">
						Register
					</button>
					<button type="reset" className="btn">
						Reset
					</button>
				</div>
			</div>
		);
	}
}
