import React, { Component } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class AddtoCartCount extends Component {

	getValue() {
		let value = 1;
		return value
		// if (this.props.addToCartCount.filteredCategory === undefined) {
		// 	let homeItems = this.props.addToCartCount.itemList;
		// 	let homeItemIndex = this.props.addToCartCount.currentIndex;
		// 	value = homeItems[homeItemIndex].count
		// 	return value
		// } else if (value === undefined) {
		// 	let filteredItems = this.props.addToCartCount.addToCartCount.filteredCategory.items;
		// 	let filteredItemIndex = this.props.addToCartCount.index;
		// 	value = filteredItems[filteredItemIndex].count
		// 	return value
		// }
	}

	render() {
		console.log('props for count');
		console.log(this.props);

		return (
			<div className={styles.wrapper}>

				<div className={styles.input__wrapper}>
					<input
						pattern="^[0-9]{2,3}$"
						name="number"
						className={styles.input}
						message={"Add items 1-99 at a time!"}
						value={this.getValue()}
						type="numer"
						min='1'
						max='99'
						onChange={this.props.handleCartCountOnChange} />
				</div>
				<div className={styles.button__wrapper}>
					<button
						onClick={this.props.increaseCount}
						className={styles.input__button}>
						<div className={styles.icon}>
							<FontAwesomeIcon icon={faChevronUp} />
						</div>
					</button>
					<button className={styles.input__button}
						onClick={this.props.decreaseCount}>
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
