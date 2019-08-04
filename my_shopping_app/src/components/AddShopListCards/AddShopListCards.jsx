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

		// const selectedItem = category.items[filters.itemKey];

		const viewSelectedClass = filters.isItemViewPannelOpen ? styles.viewSelectedItemActive : styles.viewSelectedItem;

		return (
			<div>
				{
					category && category.items &&
					<div className={styles.Wrapper}>
						{filters && filters.isItemViewPannelOpen && category.items[filters.itemKey] &&
							<div className={viewSelectedClass}>
								<ViewedItem
									image={category.items[filters.itemKey].imagelink}
									name={category.items[filters.itemKey].name}
									price={category.items[filters.itemKey].price}
									description={category.items[filters.itemKey].description}
									rating={category.items[filters.itemKey].rating}
									stock={category.items[filters.itemKey].stock}
									onItemClick={() => {
										this.onClickFilter('isItemViewPannelOpen', undefined)
									}}
									addToCartCount={this.props.addToCartCount}
									addToCart={this.props.addToCart}
									handleOnChange={this.handleOnChange}
									increaseCount={this.props.increaseCount}
									decreaseCount={this.props.decreaseCount}
									checkOutCart={this.props.checkOutCart}
								/>
							</div>
						}
						<div className={styles.cardsWrapper}>
							{
								category.items.map((item, index) => {
									return (
										<ItemCard
											key={index}
											index={index}
											image={item.imagelink}
											name={item.name}
											price={item.price}
											onItemClick={() => {
												this.onClickFilter('isItemViewPannelOpen', index)
											}}
											addToCartCount={this.props.addToCartCount}
											addToCart={this.props.addToCart}
											handleOnChange={this.handleOnChange}
											increaseCount={this.props.increaseCount}
											decreaseCount={this.props.decreaseCount}
											checkOutCart={(e) => {
												e.preventDefault();
												e.stopPropagation();
												let cartItem = category.items[index];
												this.props.checkOutCart(cartItem)
											}}
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
