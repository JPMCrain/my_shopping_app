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
				<Carousel
					itemList={this.props.itemState}
					goToPrevSlide={this.props.goToPrevSlide}
					goToNextSlide={this.props.goToNextSlide}
					addToCartCount={this.props.addToCartCount}
					addToCart={this.props.addToCart}
					checkOutCart={this.props.checkOutCart}
					handleCartCountOnChange={this.props.handleCartCountOnChange}
					increaseCount={this.props.increaseCount}
					decreaseCount={this.props.decreaseCount}
				/>
				<Footer />
			</div>
		)
	}
}

export default HomePage
