import React, { Component } from 'react'
import styles from './index.module.css';

class CartItem extends Component {
	render() {
		console.log(this.props.total)
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

				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>X {this.props.count}</p>
				</div>
				<div className={styles.cartCellNumber__wrapper}>
					<p>$ {this.props.total}</p>
				</div>

			</div>
		)
	}
}

export default CartItem

