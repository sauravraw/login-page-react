import React, { Component } from "react";
import image from "../../images/login.png";
import styles from "../../styles/style.css";

class LoginForm extends Component {
	render() {
		return (
			<div className={styles["basecontainer"]} ref={this.props.containerRef}>
				<div className={styles["header"]}>Login</div>
				<div className={styles["content"]}>
					<div className={styles["image"]}>
						<img src={image} alt="Login" />
					</div>
					<div className={styles["form"]}>
						<div className={styles["form-group"]}>
							<input
								type="email"
								name="email"
								required
								placeholder="email@ex.com"
							/>
						</div>
						<div className={styles["form-group"]}>
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
