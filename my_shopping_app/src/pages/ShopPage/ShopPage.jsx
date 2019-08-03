import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';

import Footer from '../../components/Footer/Footer.jsx';
import CatogoryList from '../../components/CatogoryList/CatogoryList';
import AddShopListCards from '../../components/AddShopListCards/AddShopListCards';
import ShopListHeader from '../../components/ShopListHeader/ShopListHeader';


class ShopPage extends Component {
	render() {

		const { filteredCategory, filters, catogoryLists, openIndex } = this.props;

		return (
			<div className={styles.Wrapper}>
				<Header />
				<div className={styles.midWrapper}>
					<div className={styles.listWrapper}>
						<CatogoryList
							filters={filters}
							catogoryLists={catogoryLists}
							openIndex={openIndex}
							onFilterChange={this.props.onFilterChange}
							onCatogoryClick={this.props.onCatogoryClick}
							onCategorytItemClick={this.props.onCategorytItemClick}
						/>
					</div>
					<div className={styles.itemsWrapper}>
						{filteredCategory &&
							<div>
								<ShopListHeader
									title={filteredCategory.name}
									filters={filters}
									onFilterChange={this.props.onFilterChange}
								/>
								<AddShopListCards
									category={filteredCategory}
									filters={filters}
									onFilterChange={this.props.onFilterChange}
									addToCartCount={this.props}
									addToCart={this.props.addToCart}
									increaseCount={this.props.increaseCount}
									decreaseCount={this.props.decreaseCount}
									checkOutCart={this.props.checkOutCart} />
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