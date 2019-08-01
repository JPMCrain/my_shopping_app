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

	render() {
		const { category, filters } = this.props;
		const selectedItem = category.items[filters.itemKey];
		const viewSelectedClass = filters.isItemViewPannelOpen ? styles.viewSelectedItemActive : styles.viewSelectedItem;
		console.log(this.props);
		return (
			<div>
				{
					category && category.items &&
					<div className={styles.Wrapper}>
						{filters && filters.isItemViewPannelOpen && selectedItem &&
							<div className={viewSelectedClass}>
								<ViewedItem
									image={selectedItem.imagelink}
									name={selectedItem.name}
									price={selectedItem.price}
									description={selectedItem.description}
									rating={selectedItem.rating}
									stock={selectedItem.stock}
									onItemClick={() => { this.onClickFilter('isItemViewPannelOpen', undefined) }}

									addToCart={this.props.addToCart}
									handleOnChange={this.handleOnChange}
									increaseCount={this.props.increaseCount}
									decreaseCount={this.props.decreaseCount}
								/>
							</div>
						}
						<div className={styles.cardsWrapper}>
							{
								category.items.map((item, index) => {
									return (
										<ItemCard
											key={index}
											image={item.imagelink}
											name={item.name}
											price={item.price}
											onItemClick={() => { this.onClickFilter('isItemViewPannelOpen', index) }}

											addToCart={this.props.addToCart}
											handleOnChange={this.handleOnChange}
											increaseCount={this.props.increaseCount}
											decreaseCount={this.props.decreaseCount}
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
