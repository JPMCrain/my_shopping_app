import React, { Component } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class AddtoCartCount extends Component {

	constructor(props) {
		super(props)
		this.state = {
			quantity: props.quantity || 1,
			index: props.index || 0
		}
		this.handleQuantityOnInputChange = this.handleQuantityOnInputChange.bind(this)
		this.handleQuantityArrowUpClick = this.handleQuantityArrowUpClick.bind(this)
		this.handleQuantityArrowDownClick = this.handleQuantityArrowDownClick.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			quantity: nextProps.quantity || 1,
			index: nextProps.index || 0
		})
	}

	handleQuantityChange(quantity) {
		if (!(quantity < 0 || quantity > 99)) {
			this.setState({ quantity })
			this.props.onQuantityChange(quantity, this.state.index)
		}
	}

	handleQuantityOnInputChange(e) {
		e.preventDefault();
		e.stopPropagation();
		const { value } = e.target
		const quantity = parseInt(value)
		this.handleQuantityChange(quantity);
	}

	handleQuantityArrowUpClick(e) {
		e.preventDefault();
		e.stopPropagation();
		const { quantity } = this.state;
		this.handleQuantityChange(quantity + 1);
	}

	handleQuantityArrowDownClick(e) {
		e.preventDefault();
		e.stopPropagation();
		const { quantity } = this.state;
		this.handleQuantityChange(quantity - 1);
	}

	render() {
		return (
			<div className={styles.wrapper}>

				<div className={styles.input__wrapper}>
					<input
						pattern="^[0-9]{2,3}$"
						name="number"
						className={styles.input}
						message={"Add items 1-99 at a time!"}
						value={this.state.quantity}
						type="numer"
						min='1'
						max='99'
						onChange={this.handleQuantityOnInputChange} />
				</div>
				<div className={styles.button__wrapper}>
					<button
						onClick={this.handleQuantityArrowUpClick}
						className={styles.input__button}>
						<div className={styles.icon}>
							<FontAwesomeIcon icon={faChevronUp} />
						</div>
					</button>
					<button className={styles.input__button}
						onClick={this.handleQuantityArrowDownClick}>
						<div className={styles.icon}>
							<FontAwesomeIcon icon={faChevronDown} />
						</div>
					</button>
				</div>
			</div>
		)
	}
}

export default AddtoCartCount
