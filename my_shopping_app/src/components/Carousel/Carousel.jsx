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
						value={itemListRecieved[currentIndex].count}
						handleCartCountOnChange={(e) => {
							e.preventDefault();
							e.stopPropagation();
							this.props.handleCartCountOnChange()
						}}
						increaseCount={(e) => {
							e.preventDefault();
							e.stopPropagation();
							console.log(currentIndex)
							this.props.increaseCount(currentIndex);
						}}
						decreaseCount={(e) => {
							e.preventDefault();
							e.stopPropagation();
							this.props.decreaseCount(currentIndex);
						}}
						addToCartCount={this.props.addToCartCount}
						addToCart={this.props.addToCart}

						checkOutCart={(e) => {
							e.preventDefault();
							e.stopPropagation();
							let cartItem = itemListRecieved[currentIndex];
							this.props.checkOutCart(cartItem, currentIndex)
						}}
					/>

				}
				<ArrowRight goToNextSlide={this.props.goToNextSlide}></ArrowRight>
			</div>
		)
	}
}

export default Carousel
