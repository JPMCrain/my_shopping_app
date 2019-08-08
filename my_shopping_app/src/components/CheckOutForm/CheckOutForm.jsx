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
								name='name'
								onChange={this.props.handleOnchange}
							/>
						</div>
						<div className={styles.inputfield__wrapper}>
							<h4>Email</h4>
							<input
								className={styles.input}
								type="email"
								name='email'
								onChange={this.props.handleOnchange}

							/>
						</div>
						<div className={styles.inputfield__wrapper}>
							<h4>Cell</h4>
							<input
								className={styles.input}
								type="number"
								name='number'
								onChange={this.props.handleOnchange}

							/>
						</div>
						<div className={styles.inputfield__wrapper}>
							<h4>Address</h4>
							<input
								className={styles.input}
								type="text"
								name='address'
								onChange={this.props.handleOnchange}

							/>
						</div>
						<div className={styles.Message__wrapper}>
							<h4>Message</h4>
							<textarea
								className={styles.message}
								type="text"
								name='message'
								onChange={this.props.handleOnchange}
							>

							</textarea>
						</div>
						<div className={styles.button__wrapper}>
							<button
								className={styles.button}
								onSubmit={this.props.handleSubmit}
							>
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