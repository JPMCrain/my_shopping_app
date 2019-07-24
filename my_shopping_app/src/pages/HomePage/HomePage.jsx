import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Footer from '../../components/Footer/Footer.jsx';

class HomePage extends Component {
	render() {
		return (
			<div className={styles.Wrapper}>
				<Header />
				<Carousel />
				<Footer />
			</div>
		)
	}
}

export default HomePage
