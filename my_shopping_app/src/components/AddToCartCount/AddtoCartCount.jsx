import React, { Component } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// const validate = (value, errMessage, pattern) => {
// 	errMessage = "Must contain 2-3 digits"
// 	const valid = new RegExp(pattern).test(value);
// 	return valid ? value : errMessage;
// };

class AddtoCartCount extends Component {
	onQuantityChange(value) {
		// const error = validate(value, errMessage, pattern);
		this.props.handleCartCountOnChange(value);
	}

	render() {
		const { addToCartCount } = this.props
		const itemListRecieved = addToCartCount.itemList
		const currentIndex = addToCartCount.currentIndex

		return (
			<div className={styles.wrapper}>

				<div className={styles.input__wrapper}>
					<input
						pattern="^[0-9]{2,3}$"
						name="number"
						className={styles.input}
						message={"Add items 1-99 at a time!"}
						type="numer"
						min='1'
						max='99'
						value={itemListRecieved[currentIndex].count}
						onChange={(e) => {
							const target = e.target;
							const value = target.value;
							const pattern = target.pattern;
							const message = target.message;
							const min = target.min;
							const max = target.max;
							this.onQuantityChange(value, message, pattern, min, max)
						}}  {...this.props} />
				</div>
				<div className={styles.button__wrapper}>
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							this.props.increaseCount();
						}}
						className={styles.input__button}>
						<div className={styles.icon}>
							<FontAwesomeIcon icon={faChevronUp} />
						</div>
					</button>
					<button className={styles.input__button}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							this.props.decreaseCount();
						}}>
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
