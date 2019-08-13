import React, { Component } from 'react'
import styles from './index.module.css';

const emailRegex = RegExp(/^(([^<>()@"]+(\.[^<>()@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const formValid = ({ formErrors, ...rest }) => {
	let valid = true;

	Object.values(formErrors).forEach(val => {
		val.length > 0 && (valid = false);
	});

	Object.values(rest).forEach(val => {
		val === "" && (valid = false);
	});

	return valid;
};

class CheckOutForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			number: '',
			address: '',
			message: '',
			formErrors: {
				name: '',
				email: '',
				number: '',
				address: '',
				message: '',
			}

		}
	}

	clearInputs() {
		this.nameInput.value = "";
		this.emailInput.value = "";
		this.numberInput.value = "";
		this.addressInput.value = "";
		this.messageInput.value = "";
	}

	handleCheckOutFormSubmit = e => {
		e.preventDefault()
		if (formValid(this.state)) {
			this.props.checkOutCart(
				this.state.name,
				this.state.email,
				this.state.number,
				this.state.address,
				this.state.message,
			)
			console.log(`
        --SUBMITTING--
        First Name: ${this.state.name}
        Email: ${this.state.email}
        Number: ${this.state.number}
        address: ${this.state.address}'
        message: ${this.state.message}
        `)
			this.setState({
				name: '',
				email: '',
				number: '',
				address: '',
				message: '',
				formErrors: {
					name: '',
					email: '',
					number: '',
					address: '',
				}
			});
			this.clearInputs();
		}
		else {
			console.error('FORM INVALID: Check error message');
		}
	}

	handleCheckOutFormChange = e => {
		e.preventDefault();
		const { name, value } = e.target
		const formErrors = this.state.formErrors;

		switch (name) {
			case 'name':
				formErrors.name =
					value.length < 3 ? "minimum 3 characters required!" : "";
				break;
			case 'email':
				formErrors.email =
					emailRegex.test(value) ? "" : "Invalid email address!";
				break;
			case 'number':
				formErrors.number =
					value.length < 10 ? "minimum 10 numbers required!" : "";
				break;
			case 'address':
				formErrors.address =
					value.length < 10 ? "minimum 10 characters required!" : "";
				break;
			default:
				break
		}

		this.setState({ formValid, [name]: value }, () => { console.log(this.state) })

	}


	render() {
		const { formErrors } = this.state;

		return (
			<div>
				<form onSubmit={this.handleCheckOutFormSubmit} noValidate>
					<div className={styles.form__wrapper}>
						<div className={styles.input__wrapper}>
							<div className={styles.inputfield__wrapper}>
								<h4>Full Name</h4>
								<div className={styles.inputFlex}>
									<input
										className={styles.input}
										ref={el => this.nameInput = el}
										type="text"
										name='name'
										onChange={this.handleCheckOutFormChange}
										noValidate
									/>
									{formErrors.name.length > 0 && (<span>{formErrors.name}</span>)}
								</div>
							</div>
							<div className={styles.inputfield__wrapper}>
								<h4>Email</h4>
								<div className={styles.inputFlex}>
									<input
										className={styles.input}
										ref={el => this.emailInput = el}
										type="email"
										name='email'
										onChange={this.handleCheckOutFormChange}
										noValidate
									/>
									{formErrors.email.length > 0 && (<span>{formErrors.email}</span>)}
								</div>
							</div>
							<div className={styles.inputfield__wrapper}>
								<h4>Cell</h4>
								<div className={styles.inputFlex}>
									<input
										className={styles.input}
										noValidate
										ref={el => this.numberInput = el}
										type="number"
										name='number'
										onChange={this.handleCheckOutFormChange}
									/>
									{formErrors.number.length > 0 && (<span>{formErrors.number}</span>)}
								</div>
							</div>
							<div className={styles.Message__wrapper}>
								<h4>Address</h4>
								<div className={styles.inputFlex}>
									<textarea
										className={styles.message}
										ref={el => this.addressInput = el}
										type="text"
										name='address'
										onChange={this.handleCheckOutFormChange}
										noValidate
									></textarea>
									{formErrors.address.length > 0 && (<p>{formErrors.address}</p>)}
								</div>
							</div>
							<div className={styles.Message__wrapper}>
								<h4>Message</h4>
								<textarea
									className={styles.message}
									ref={el => this.messageInput = el}
									type="text"
									name='message'
									onChange={this.handleCheckOutFormChange}
									noValidate
								>
								</textarea>
							</div>
						</div>
						<div className={styles.button__wrapper}>
							<button
								className={styles.button}
								type="submit"
							>
								Check Out
							</button>
						</div>
					</div>
				</form>
			</div >
		)
	}
}

export default CheckOutForm;