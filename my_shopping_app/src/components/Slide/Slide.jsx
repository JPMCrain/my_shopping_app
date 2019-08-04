import React, { Component } from 'react'
import styles from './index.module.css';
import AddToCart from '../AddToCart/AddToCart';
import AddtoCartCount from '../AddToCartCount/AddtoCartCount';

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
								value={this.props.value}
								handleCartCountOnChange={this.props.handleCartCountOnChange}
								addToCartCount={this.props.addToCartCount}
								increaseCount={this.props.increaseCount}
								decreaseCount={this.props.decreaseCount}
							/>
						</div>
						<div className={styles.AddtoCart}>
							<AddToCart
								addToCart={this.props.addToCart}
								checkOutCart={this.props.checkOutCart} />
						</div>
					</div>

				</div>
			</div>

		)
	}
}

export default Slide
