import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';

import Footer from '../../components/Footer/Footer.jsx';
import CatogoryList from '../../components/CatogoryList/CatogoryList';
import AddShopListCards from '../../components/AddShopListCards/AddShopListCards';
import ShopListHeader from '../../components/ShopListHeader/ShopListHeader';

import cloneDeep from 'lodash/cloneDeep';

class ShopPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedCategory: undefined,
			filteredCategory: undefined,
			filters: {
				sortByPrice: false,
				filterByPrice: false,
				filterByStock: false,
				isItemViewPannelOpen: false,
				itemKey: undefined,
				min: undefined,
				max: undefined,
			},
			addToCart: {
				cart: {
					id: 1,
					items: {},
					count: 1
				}
			}
		}

		this.onCategorytItemClick = this.onCategorytItemClick.bind(this);
		this.onFilterChange = this.onFilterChange.bind(this);

	}

	onCategorytItemClick = (selectedCategory) => {
		const { filters } = this.state;
		const filteredCategory = this.filterCategoryItems(selectedCategory, filters)
		this.setState({ selectedCategory, filteredCategory });
	}

	onFilterChange(filters) {
		const { selectedCategory } = this.state;
		const filteredCategory = this.filterCategoryItems(selectedCategory, filters)
		this.setState({ filters, filteredCategory });
	}

	filterCategoryItems(category, filters) {
		const filteredCategory = cloneDeep(category);

		if (filters.sortByPrice) {
			this.sortByPrice(filteredCategory)
		}

		if (filters.filterByStock) {
			this.filterByStock(filteredCategory)
		}

		if (filters.filterByPrice) {
			this.filterByPrice(filteredCategory)
		}

		return filteredCategory;
	}

	sortByPrice(filteredCategory) {
		filteredCategory.items.sort(function (a, b) {
			return parseFloat(b.price) - parseFloat(a.price);
		});
	}

	filterByStock(filteredCategory) {
		let newfilteredCategory = filteredCategory.items.filter((item) => {
			return item.stock > 0;
		});
		filteredCategory.items = newfilteredCategory;
	}

	filterByPrice(filteredCategory) {
		const { filters } = this.state;
		const expectedMin = filters.min || 0
		let newfilteredCategory = filteredCategory.items.filter((item) => {
			const expectedMax = filters.max || item.price
			const min = Math.min(expectedMin, expectedMax);
			const max = Math.max(expectedMin, expectedMax);
			return item.price >= min && item.price <= max
		});
		filteredCategory.items = newfilteredCategory;
	}
	handleOnChange() {

	}

	increaseCount() {
		let count = this.state.addToCart.cart.count
		count++
		let newCount = count
		this.setState({
			addToCart: {
				cart: {
					id: 1,
					items: {},
					count: newCount
				}
			}
		});
	}

	decreaseCount() {
		let count = this.state.addToCart.cart.count
		if (count === 1) {
			return
		}
		let newCount = count - 1
		this.setState({
			addToCart: {
				cart: {
					id: 1,
					items: {},
					count: newCount
				}
			}
		});
	}

	checkOutCart() {
		alert('im clicked')
	}


	render() {

		const { filteredCategory, filters } = this.state;

		return (
			<div className={styles.Wrapper}>
				<Header />
				<div className={styles.midWrapper}>
					<div className={styles.listWrapper}>
						<CatogoryList
							filters={filters}
							onFilterChange={this.onFilterChange}
							onCategorytItemClick={this.onCategorytItemClick}
						/>
					</div>
					<div className={styles.itemsWrapper}>
						{filteredCategory &&
							<div>
								<ShopListHeader
									title={filteredCategory.name}
									filters={filters}
									onFilterChange={this.onFilterChange}
								/>
								<AddShopListCards
									category={filteredCategory}
									filters={filters}
									onFilterChange={this.onFilterChange}
									addToCart={this.state.addToCart}
									handleOnChange={this.handleOnChange}
									increaseCount={this.increaseCount.bind(this)}
									decreaseCount={this.decreaseCount.bind(this)}
									checkOutCart={this.checkOutCart.bind(this)} />
							</div>
						}
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default ShopPage