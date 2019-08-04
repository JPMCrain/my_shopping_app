import React, { Component } from 'react'
import styles from './index.module.css';

class CheckOutForm extends Component {
	render() {
		return (
			<div>
				<form action="">
					<div className={styles.form__wrapper}>
						<div className={styles.inputfield__wrapper}>
							<h4>Full Name</h4>
							<input
								className={styles.input}
								type="text"

							/>
						</div>
						<div className={styles.inputfield__wrapper}>
							<h4>Email</h4>
							<input
								className={styles.input}
								type="text"

							/>
						</div>
						<div className={styles.inputfield__wrapper}>
							<h4>Cell</h4>
							<input
								className={styles.input}
								type="number"

							/>
						</div>
						<div className={styles.inputfield__wrapper}>
							<h4>Address</h4>
							<input
								className={styles.input}
								type="text"

							/>
						</div>
						<div className={styles.Message__wrapper}>
							<h4>Message</h4>
							<textarea
								className={styles.message}
								type="text"
							>

							</textarea>
						</div>
						<div className={styles.button__wrapper}>
							<button className={styles.button}>
								Check Out
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default CheckOutForm;