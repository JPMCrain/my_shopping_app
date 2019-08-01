import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

class CheckOutPage extends Component {
	render() {
		console.log(this.props)
		return (
			<div className={styles.Wrapper}>
				<Header />
				<div className={styles.midWrapper}>
					<div className={styles.midWrapper__section1}>

					</div>
					<div className={styles.midWrapper__section2}>

					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default CheckOutPage
