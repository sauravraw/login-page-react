import React, { Component } from "react";
import image from "../../images/register.png";
import styles from "../../styles/style.css";

class RegisterForm extends Component {
	render() {
		return (
			<div className={styles["basecontainer"]} ref={this.props.containerRef}>
				<div className={styles["header"]}>Register</div>
				<div className={styles["content"]}>
					<div className={styles["image"]}>
						<img src={image} alt="Register" />
					</div>
					<div className={styles["form"]}>
						<div className={styles["form-group"]}>
							<input
								type="text"
								name="userName"
								required
								placeholder="UserName"
							/>
						</div>
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

export default RegisterForm;
