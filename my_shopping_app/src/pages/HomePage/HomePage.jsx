import React, { Component } from 'react'
import styles from './index.module.css';
import Header from '../../components/Header/Header.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Footer from '../../components/Footer/Footer.jsx';

class HomePage extends Component {

	render() {

		console.log(this.props.increaseCount)
		return (
			<div className={styles.Wrapper}>
				<Header />
				<Carousel
					itemList={this.props.itemState}
					goToPrevSlide={this.props.goToPrevSlide}
					goToNextSlide={this.props.goToNextSlide}
					addToCart={this.props.addToCart}
					handleOnChange={this.props.handleOnChange}
					increaseCount={this.props.increaseCount}
					decreaseCount={this.props.decreaseCount}
				/>
				<Footer />
			</div>
		)
	}
}

export default HomePage
