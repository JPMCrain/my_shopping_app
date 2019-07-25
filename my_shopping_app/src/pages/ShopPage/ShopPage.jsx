import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';

import Footer from '../../components/Footer/Footer.jsx';
import CatogoryList from '../../components/CatogoryList/CatogoryList';
import ShopListCards from '../../components/ShopListCards/ShopListCards';

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
						<ShopListCards recievedItem={this.state.selectedList} />
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

export default ShopPage