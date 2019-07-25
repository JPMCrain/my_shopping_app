import React, { Component } from 'react';
import styles from './index.module.css';

import AddToCart from '../AddToCart/AddToCart';

class ItemCard extends Component {
	render() {
		return (
			<div className={styles.itemWrapper}>
				<div className={styles.itemImage}>
					<img src="" alt="" />
				</div>
				<div className={styles.itemName}>
					<h4>sugar and spice</h4>
				</div>
				<div className={styles.itemPrice}>
					<h4>$ 5.99</h4>
				</div>
				<div className={styles.AddToCartWrapper}>
					<div className={styles.itemQuantity}>

					</div>
					<div className={styles.itemAddToCart}>
						<AddToCart />
					</div>
				</div>

			</div>
		)
	}
}

export default ItemCard
