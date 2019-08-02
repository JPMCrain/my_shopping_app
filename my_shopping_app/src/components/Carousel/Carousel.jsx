import React, { Component } from 'react';
import styles from './index.module.css';

import Slide from '../Slide/Slide';
import ArrowLeft from '../ArrowLeft/ArrowLeft';
import ArrowRight from '../ArrowRight/ArrowRight';



class Carousel extends Component {

	render() {
		const { itemList } = this.props
		const itemListRecieved = itemList.itemList
		const currentIndex = itemList.currentIndex
		return (
			<div className={styles.slideShow}>
				<ArrowLeft goToPrevSlide={this.props.goToPrevSlide}></ArrowLeft>
				{itemList.itemList.length > 0 &&
					<Slide
						name={itemListRecieved[currentIndex].name}
						description={itemListRecieved[currentIndex].description}
						price={itemListRecieved[currentIndex].price}
						image={itemListRecieved[currentIndex].imagelink}
						handleCartCountOnChange={this.props.handleCartCountOnChange}
						increaseCount={this.props.increaseCount}
						decreaseCount={this.props.decreaseCount}
						addToCartCount={this.props.addToCartCount}
						addToCart={this.props.addToCart}
						checkOutCart={this.props.checkOutCart}
					/>

				}
				<ArrowRight goToNextSlide={this.props.goToNextSlide}></ArrowRight>
			</div>
		)
	}
}

export default Carousel
