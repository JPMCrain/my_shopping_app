import React, { Component } from 'react';
import styles from './index.module.css';

import AddToCart from '../AddToCart/AddToCart';
import AddtoCartCount from '../AddToCartCount/AddtoCartCount';

class ItemCard extends Component {
	render() {
		return (
			<div onClick={this.props.onItemClick} className={styles.itemWrapper}>
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
						<AddtoCartCount
							addToCart={this.props.addToCart}
							handleOnChange={this.handleOnChange}
							increaseCount={this.props.increaseCount}
							decreaseCount={this.props.decreaseCount} />
					</div>
					<div className={styles.itemAddToCart}>
						<AddToCart
							addToCart={this.props.addToCart}
							handleOnChange={this.handleOnChange}
							increaseCount={this.props.increaseCount}
							decreaseCount={this.props.decreaseCount} />
					</div>
				</div>

			</div>
		)
	}
}

export default ItemCard
