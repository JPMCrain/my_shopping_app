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
							addToCartCount={this.props}
							value={this.props.value}
							handleCartCountOnChange={this.props.handleCartCountOnChange}
							increaseCount={this.props.increaseCount}
							decreaseCount={this.props.decreaseCount}
						/>
					</div>
					<div className={styles.itemAddToCart}>
						<AddToCart
							key={this.props.index}
							addToCart={this.props.addToCart}

							checkOutCart={this.props.checkOutCart} />
					</div>
				</div>

			</div>
		)
	}
}

export default ItemCard
