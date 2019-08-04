import React, { Component } from 'react'
import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class CartItem extends Component {
	render() {
		return (
			<div className={styles.cartItem__wrapper}>
				<div>
					<img className={styles.cartImage} src={this.props.image} alt={this.props.name} />
				</div>
				<div className={styles.cartCellTitle__wrapper}>
					<p>{this.props.name}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>${this.props.price}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>X {this.props.count}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>$ {this.props.total}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<div className={styles.removeItem__wrapper}>
						<button className={styles.removeItem}>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</div>
				</div>

			</div>
		)
	}
}

export default CartItem

