import React, { Component } from 'react';
import styles from './index.module.css';

import store from '../../data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom"

class Header extends Component {

	linkOnclick(linkName) {
		console.log(linkName);
		this.props.linkOnclick(linkName)
	}

	getNewValue() {
		const cart = store.getValue('cart', []);
		let value = cart.length;
		return value
	}

	render() {
		const goTab = this.props.linkName === 'home' ? styles.goTabActive : styles.goTab
		const goTabShop = this.props.linkName === 'shop' ? styles.goTabActive : styles.goTab
		const goTabCheckout = this.props.linkName === 'checkout' ? styles.goToCartTabActive : styles.goToCartTab

		return (
			<div>
				<header className={styles.headerWrapper}>
					<div className={styles.heading}>
						<h1>My Shopping App</h1>
					</div>
					<div className={styles.headingTabs}>
						<Link to='/'>
							<button
								onClick={() => {
									this.linkOnclick('home');
								}}
								disabled={this.props.home === 'home'}
								className={goTab}>Home</button>
						</Link>
						<Link to='/shop'>

							<button
								onClick={() => {
									this.linkOnclick('shop');
								}}
								disabled={this.props.shop === 'shop'}
								className={goTabShop}>Go to Shop</button>
						</Link>
						<Link to='/checkout' className={styles.cartCount}>
							<button
								onClick={() => {
									this.linkOnclick('checkout');
								}}
								className={goTabCheckout}
								disabled={this.props.checkout === 'checkout'}>
								<div className={styles.cartCountNumber}>
									<p>{this.getNewValue()}</p>
								</div>
								<FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faCartArrowDown} />
							</button>
						</Link>
					</div>
				</header>
			</div>
		)
	}
}

export default Header


