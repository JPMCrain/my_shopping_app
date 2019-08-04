import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import CartItem from '../../components/CartItem/CartItem';
import CartItemHeader from '../../components/CartItemHeader/CartItemHeader';
import CheckOutForm from '../../components/CheckOutForm/CheckOutForm';

class CheckOutPage extends Component {


	totalOfAllItems() {
		const { checkOutCartState } = this.props
		let total = '0.00'
		if (checkOutCartState.length > 0) {
			function amount(item) {
				return item.total;
			}

			function sum(prev, next) {
				return prev + next;
			}

			let total = checkOutCartState.map(amount).reduce(sum);

			return parseFloat(total)
		}
		return total
	}

	render() {
		const { checkOutCartState } = this.props
		return (
			<div className={styles.Wrapper}>
				<Header />
				<div className={styles.midWrapper}>
					<div className={styles.midWrapper__section1}>
						<div className={styles.cart__Wrapper}>
							<CartItemHeader
								name="Product Name"
								price="Price"
								count="Count"
								total="Total"
							/>
							{
								checkOutCartState.map((item, index) => {
									return (
										<CartItem
											key={index}
											name={item.name}
											price={item.price}
											count={item.count}
											image={item.imagelink}
											total={item.total}
										/>)
								})
							}
						</div>
						<div className={styles.totalOfAllItems}>
							Total Sum:	$	{this.totalOfAllItems()}
						</div>
					</div>
					<div className={styles.midWrapper__section2}>
						<CheckOutForm />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default CheckOutPage
