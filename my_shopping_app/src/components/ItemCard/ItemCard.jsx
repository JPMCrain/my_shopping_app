import React, { Component } from 'react';
import styles from './index.module.css';

import AddToCart from '../AddToCart/AddToCart';

class ItemCard extends Component {
	render() {
		return (
			<div className={styles.itemWrapper}>
				<div >
					<img className={styles.itemImage} src={this.props.image} alt="" />
				</div>
				<div className={styles.itemName}>
					<h4>{this.props.name}</h4>
				</div>
				<div className={styles.itemPrice}>
					<h4>$ {this.props.price}</h4>
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
