import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';

import Footer from '../../components/Footer/Footer.jsx';
import CatogoryList from '../../components/CatogoryList/CatogoryList';

class ShopPage extends Component {
	render() {
		return (
			<div className={styles.Wrapper}>
				<Header />
				<div className={styles.midWrapper}>
					<div className={styles.listWrapper}>
						<CatogoryList />
					</div>
					<div className={styles.itemsWrapper}>

					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

export default ShopPage