import React, { Component } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class AddtoCartCount extends Component {

	render() {
		return (
			<div className={styles.wrapper}>

				<div className={styles.input__wrapper}>
					<input
						pattern="^[0-9]{2,3}$"
						name="number"
						className={styles.input}
						message={"Add items 1-99 at a time!"}
						value={this.props.value}
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
