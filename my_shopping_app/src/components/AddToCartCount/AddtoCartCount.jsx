import React, { Component } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class AddtoCartCount extends Component {

	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.input__wrapper}>
					<input className={styles.input} type="numer" min='1' />
				</div>
				<div className={styles.button__wrapper}>
					<button onClick={this.onClickUp} className={styles.input__button}>
						<div className={styles.icon}>
							<FontAwesomeIcon icon={faChevronUp} />
						</div>
					</button>
					<button onClick={this.onClickDown} className={styles.input__button}>
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
