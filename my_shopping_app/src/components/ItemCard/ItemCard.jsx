import React, { Component } from 'react';
import styles from './index.module.css';
import store from '../../data'
import _ from 'lodash'

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

							ref={(ref) => this.cartCountComponent = ref}
						/>
					</div>
					<div className={styles.itemAddToCart}>
						<AddToCart
							addToCart={() => {
								const cart = store.getValue('cart', []);
								const cartItem = _.cloneDeep(this.props.item)
								const { quantity } = this.cartCountComponent.state;
								cartItem.count = quantity;
								cart.push(cartItem);
								store.notifyChange('cart', cart);
								this.setState({});
							}} />
					</div>
				</div>

			</div>
		)
	}
}

export default ItemCard
