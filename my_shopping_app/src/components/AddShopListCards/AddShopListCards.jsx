import React from 'react'
import styles from './index.module.css';
import ItemCard from '../ItemCard/ItemCard';

function AddShopListCards({ category }) {

	return (
		<div>
			{
				category && category.items &&
				<div className={styles.Wrapper}>
					<div className={styles.cardsWrapper}>
						{
							category.items.map((item, index) => {
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
			}
		</div>
	)
}

export default AddShopListCards
