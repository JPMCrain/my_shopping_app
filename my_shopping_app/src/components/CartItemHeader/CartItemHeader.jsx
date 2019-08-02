import React, { Component } from 'react'
import styles from './index.module.css';

class CartItemHeader extends Component {
	render() {
		console.log(this.props)
		return (
			<div className={styles.cartItem__wrapper}>
				<div className={styles.cartCellImage__wrapper}>
					<p>{this.props.image}</p>
				</div>
				<div className={styles.cartCellTitle__wrapper}>
					<p>{this.props.name}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>{this.props.price}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>{this.props.counter}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>{this.props.count}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>{this.props.total}</p>
				</div>

			</div >
		)
	}
}

export default CartItemHeader

