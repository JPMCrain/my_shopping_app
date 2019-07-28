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
			}
		}

		this.onCategorytItemClick = this.onCategorytItemClick.bind(this);
		this.onFilterChange = this.onFilterChange.bind(this);

	}

	onCategorytItemClick = (selectedCategory) => {
		this.setState({ selectedCategory, filteredCategory: selectedCategory });
	}

	onFilterChange(filters) {
		const { selectedCategory } = this.state;
		const filteredCategory = cloneDeep(selectedCategory);

		if (filters.sortByPrice) {
			this.sortByPrice(filteredCategory)
		}

		if (filters.filterByStock) {
			this.filterByStock(filteredCategory)
		}

		this.setState({ filters, filteredCategory });
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

	render() {
		const { filteredCategory, filters } = this.state;
		return (
			<div className={styles.Wrapper}>
				<Header />
				<div className={styles.midWrapper}>
					<div className={styles.listWrapper}>
						<CatogoryList onCategorytItemClick={this.onCategorytItemClick} />
					</div>
					<div className={styles.itemsWrapper}>
						{filteredCategory &&
							<div>
								<ShopListHeader
									title={filteredCategory.name}
									filters={filters}
									onFilterChange={this.onFilterChange}
								/>
								<AddShopListCards category={filteredCategory} />
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