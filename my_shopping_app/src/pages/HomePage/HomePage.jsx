import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Footer from '../../components/Footer/Footer.jsx';

class HomePage extends Component {

	render() {
		return (
			<div className={styles.Wrapper}>
				<Header
					home={this.props.home}
					shop={this.props.shop}
					linkOnclick={this.props.linkOnclick}
				/>
				<Carousel
					itemList={this.props.itemState}
					goToPrevSlide={this.props.goToPrevSlide}
					goToNextSlide={this.props.goToNextSlide}

					addToCartCount={this.props.addToCartCount}
					handleCartCountOnChange={this.props.handleCartCountOnChange}
					addToCart={this.props.addToCart}

					checkOutCart={this.props.checkOutCart}
					increaseCount={this.props.increaseCount}
					decreaseCount={this.props.decreaseCount}
				/>
				<Footer />
			</div>
		)
	}
}

export default HomePage
