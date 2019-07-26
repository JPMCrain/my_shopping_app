import React, { Component } from 'react'
import styles from './index.module.css';
import ItemCard from '../ItemCard/ItemCard';

export class AddShopListCards extends Component {


	render() {

		const list = this.props.recievedItems;

		return (
			<div className={styles.Wrapper}>
				<div className={styles.cardsTopBar} >
					<h4>{list.name}</h4>
				</div>
				<div className={styles.cardsWrapper}>
					{list.items !== undefined &&
						list.items.map((item, index) => {
							return (
								<ItemCard
									key={index}
									image={item.imagelink}
									name={item.name}
									price={item.price}
								/>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default AddShopListCards
