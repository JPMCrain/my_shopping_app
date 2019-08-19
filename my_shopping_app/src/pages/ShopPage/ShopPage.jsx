import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer.jsx';
import CatogoryList from '../../components/CatogoryList/CatogoryList';
import AddShopListCards from '../../components/AddShopListCards/AddShopListCards';
import ShopListHeader from '../../components/ShopListHeader/ShopListHeader';


class ShopPage extends Component {
	render() {

		const { filteredCategory, filters, catogoryLists, openIndex, openSubIndex, openCatogoryList } = this.props;

		const openCatogoryListSyle = {
			height: '100%'
		};

		const closeCatogoryListSyle = {
			height: '50px',
			display: 'flex',
			justifyContent: 'flex-end',
		};

		let listWrapperStyle = filters.isCatogoryListOpen ? openCatogoryListSyle : closeCatogoryListSyle;

		return (
			<div className={styles.Wrapper}>
				<Header
					linkName={this.props.linkName}
					linkOnclick={this.props.linkOnclick} />
				<div className={styles.midWrapper}>
					<div
						className={styles.listWrapper}
						style={listWrapperStyle}>
						<CatogoryList
							filters={filters}
							catogoryLists={catogoryLists}
							openIndex={openIndex}
							openSubIndex={openSubIndex}
							onFilterChange={this.props.onFilterChange}
							onCatogoryClick={this.props.onCatogoryClick}
							onCategorytItemClick={this.props.onCategorytItemClick}


							isButtonNeeded={this.props.isButtonNeeded}
							openCatogoryList={openCatogoryList}
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
									onQuantityChange={this.props.onQuantityChange} />
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