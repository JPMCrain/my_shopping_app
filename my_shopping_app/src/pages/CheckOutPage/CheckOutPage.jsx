import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import CartItem from '../../components/CartItem/CartItem';
import CartItemHeader from '../../components/CartItemHeader/CartItemHeader';
import CheckOutForm from '../../components/CheckOutForm/CheckOutForm';

class CheckOutPage extends Component {
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
								image="Image"
								total="Total"
								counter="Counter"
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
											stock={item.stock}
										/>)
								})
							}
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
