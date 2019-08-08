import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartItem from '../../components/CartItem/CartItem';
import CartItemHeader from '../../components/CartItemHeader/CartItemHeader';
import CheckOutForm from '../../components/CheckOutForm/CheckOutForm';

class CheckOutPage extends Component {


	totalOfAllItems() {
		const { checkOutCartState } = this.props
		console.log(checkOutCartState)
		let total = '0.00'
		if (checkOutCartState.length > 0) {
			function amount(item) {
				return item.total;
			}

			function sum(prev, next) {
				return prev + next;
			}

			let total = checkOutCartState.map(amount).reduce(sum);

			return parseFloat(total).toFixed(2)
		}
		return total
	}

	deleteItem(index) {
		const { checkOutCartState } = this.props
		if (checkOutCartState.length > 0) {
			checkOutCartState.splice(index, 1)
		}
		this.totalOfAllItems()
		this.props.removedItem(checkOutCartState)
	}

	render() {
		const { checkOutCartState } = this.props
		console.log(checkOutCartState)
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
									console.log(item + index)
									return (
										<CartItem
											key={index}
											name={item.name}
											price={item.price}
											count={item.count}
											image={item.imagelink}
											total={item.total}
											removeItem={() => {
												this.deleteItem(index)
											}}
										/>)
								})
							}
						</div>
						<div className={styles.totalOfAllItems}>
							Total Sum:	$	{this.totalOfAllItems()}
						</div>
					</div>
					<div className={styles.midWrapper__section2}>
						<CheckOutForm
							handleOnchange={this.props.handleOnchange}
							handleSubmit={this.props.handleSubmit}
							checkOutCartState={checkOutCartState}
						/>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default CheckOutPage
