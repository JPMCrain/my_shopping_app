import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Footer from '../../components/Footer/Footer';

class HomePage extends Component {

	render() {

		return (
			<div className={styles.Wrapper}>
				<Header
					linkName={this.props.linkName}
					linkOnclick={this.props.linkOnclick}
				/>
				<Carousel
					itemList={this.props.itemState}
					goToPrevSlide={this.props.goToPrevSlide}
					goToNextSlide={this.props.goToNextSlide}
					onQuantityChange={this.props.onQuantityChange}
				/>
				<Footer />
			</div>
		)
	}
}

export default HomePage
