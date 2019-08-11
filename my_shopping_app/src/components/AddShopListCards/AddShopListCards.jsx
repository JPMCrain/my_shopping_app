import React, { Component } from 'react'
import styles from './index.module.css';
import ItemCard from '../ItemCard/ItemCard';
import ViewedItem from '../ViewedItem/ViewedItem';



class AddShopListCards extends Component {

	onClickFilter(filterKey, index) {
		let { filters } = this.props;
		filters[filterKey] = !filters[filterKey];
		filters.itemKey = index;
		this.props.onFilterChange(filters);
	}

	renderViewedItem(item) {
		const { filters } = this.props;
		const viewSelectedClass = filters.isItemViewPannelOpen ? styles.viewSelectedItemActive : styles.viewSelectedItem;
		return (
			<div className={viewSelectedClass}>
				<ViewedItem
					image={item.imagelink}
					name={item.name}
					price={item.price}
					description={item.description}
					rating={item.rating}
					stock={item.stock}
					onItemClick={() => {
						this.onClickFilter('isItemViewPannelOpen', undefined)
					}}
					quantity={item.count}
					onQuantityChange={this.props.onQuantityChange}
				/>
			</div>
		)
	}

	render() {
		const { category, filters } = this.props;
		return (
			<div>
				{
					category && category.items &&
					<div className={styles.Wrapper}>
						{filters &&
							filters.isItemViewPannelOpen &&
							category.items[filters.itemKey] &&
							this.renderViewedItem(category.items[filters.itemKey])
						}
						<div className={styles.cardsWrapper}>
							{
								category.items.map((item, index) => {
									return (
										<ItemCard
											key={index}
											item={item}
											index={index}
											image={item.imagelink}
											name={item.name}
											price={item.price}
											onItemClick={() => {
												this.onClickFilter('isItemViewPannelOpen', index)
											}}
											quantity={item.count}
											onQuantityChange={this.props.onQuantityChange}
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
}

export default AddShopListCards
