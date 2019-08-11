import React, { Component } from 'react'
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

export class AddToCart extends Component {

	render() {
		return (
			<div>
				<button onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					this.props.addToCart();
				}}
					className={styles.addBtn}>
					<FontAwesomeIcon className={styles.Icon} icon={faCartArrowDown} />
					Add to Cart
				</button>
			</div>
		)
	}
}

export default AddToCart
