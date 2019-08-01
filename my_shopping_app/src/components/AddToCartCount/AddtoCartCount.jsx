import React, { Component } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class AddtoCartCount extends Component {
	render() {
		let count = this.props.addToCart.cart.count
		console.log(this.props.addToCart.cart.count)
		return (
			<div className={styles.wrapper}>
				<div className={styles.input__wrapper}>
					<input
						className={styles.input}
						type="numer"
						min='1'
						value={count}
						onChange={this.props.handleOnChange} />
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
