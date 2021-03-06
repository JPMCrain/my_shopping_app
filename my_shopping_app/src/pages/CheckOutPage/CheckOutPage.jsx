import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartItem from '../../components/CartItem/CartItem';
import CartItemHeader from '../../components/CartItemHeader/CartItemHeader';
import CheckOutForm from '../../components/CheckOutForm/CheckOutForm';
import store from '../../data'

class CheckOutPage extends Component {


	totalOfAllItems() {
		const cart = store.getValue('cart', []);
		function amount(item) {
			return item.price * item.count;
		}

		function sum(prev, next) {
			return prev + next;
		}

		if (cart.length > 0) {
			let total = cart.map(amount).reduce(sum);
			return parseFloat(total).toFixed(2)
		}

		return '0.00'
	}

	deleteCartItem(itemIndex) {
		const cart = store.getValue('cart', []);
		cart.splice(itemIndex, 1);
		store.notifyChange('cart', cart);
		this.setState({});
	}

	render() {
		const cart = store.getValue('cart', []);
		const { isButtonNeeded } = this.props
		return (
			<div className={styles.Wrapper}>
				<Header
					linkName={this.props.linkName}
					linkOnclick={this.props.linkOnclick}
				/>
				<div className={styles.midWrapper}>
					<div className={styles.midWrapper__section1}>
						<div className={styles.cart__Wrapper}>
							<CartItemHeader
								isButtonNeeded={isButtonNeeded}
								name="Product Name"
								price="Price"
								count="Count"
								total="Total"
							/>
							{
								cart.map((item, itemIndex) => {
									return (
										<CartItem
											isButtonNeeded={isButtonNeeded}
											key={itemIndex}
											name={item.name}
											price={item.price}
											count={item.count}
											image={item.imagelink}
											total={Math.round(item.price * item.count).toFixed(2)}
											removeItem={() => {
												this.deleteCartItem(itemIndex)
											}}
										/>)
								})
							}
						</div>
						<div className={styles.total__wrapper}>
							<div className={styles.totalOfAllItems}>
								Total Sum:	$	{this.totalOfAllItems()}
							</div>
						</div>

					</div>
					<div className={styles.midWrapper__section2}>
						<CheckOutForm
							checkOutCart={this.props.checkOutCart}
							checkOutCartState={cart}
						/>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default CheckOutPage
