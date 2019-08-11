import React, { Component } from 'react'
import styles from './index.module.css';
import AddToCart from '../AddToCart/AddToCart';
import AddtoCartCount from '../AddToCartCount/AddtoCartCount';
import store from '../../data'
import _ from 'lodash'

class Slide extends Component {

	render() {
		return (
			<div className={styles.slideWrapper}>
				<div>
					<img className={styles.slideImage} src={this.props.image} alt={this.props.key} />
				</div>
				<div className={styles.slideInfo}>
					<div className={styles.name}>
						<h2>{this.props.name}</h2>
					</div>
					<div className={styles.description}>
						<p>{this.props.description}</p>
					</div>
					<p className={styles.price}>${this.props.price}</p>
					<div className={styles.AddtoCart__wrapper}>
						<div className={styles.AddtoCartCount}>
							<AddtoCartCount
								ref={(ref) => this.cartCountComponent = ref}
							/>
						</div>
						<div className={styles.AddtoCart}>
							<AddToCart addToCart={() => {
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
			</div>

		)
	}
}

export default Slide
