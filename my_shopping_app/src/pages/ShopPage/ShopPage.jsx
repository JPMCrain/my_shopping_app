import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';

import Footer from '../../components/Footer/Footer.jsx';
import CatogoryList from '../../components/CatogoryList/CatogoryList';
import AddShopListCards from '../../components/AddShopListCards/AddShopListCards';
import ShopListHeader from '../../components/ShopListHeader/ShopListHeader';

class ShopPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedList: [],
		}

		this.onCategorytItemClick = this.onCategorytItemClick.bind(this);
	}

	onCategorytItemClick = (items) => {
		this.setState({ selectedList: items });
	}

	render() {
		return (
			<div className={styles.Wrapper}>
				<Header />
				<div className={styles.midWrapper}>
					<div className={styles.listWrapper}>
						<CatogoryList onCategorytItemClick={this.onCategorytItemClick} />
					</div>
					<div className={styles.itemsWrapper}>
						<div>
							<ShopListHeader recievedItems={this.state.selectedList} />
							<AddShopListCards recievedItems={this.state.selectedList} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default ShopPage