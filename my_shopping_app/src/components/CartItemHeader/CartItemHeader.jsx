import React, { Component } from 'react'
import styles from './index.module.css';

class CartItemHeader extends Component {
	render() {
		return (
			<div className={styles.cartItem__wrapper}>
				{
					!this.props.isButtonNeeded &&
					<div className={styles.cartCellImage__wrapper}>
					</div>
				}
				<div className={styles.cartCellTitle__wrapper}>
					<p>Product</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>{this.props.price}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>{this.props.count}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>{this.props.total}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
				</div>
			</div >
		)
	}
}

export default CartItemHeader

