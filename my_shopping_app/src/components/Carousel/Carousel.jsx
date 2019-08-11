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
		const item = itemListRecieved[currentIndex];
		return (
			<div className={styles.slideShow}>
				<ArrowLeft goToPrevSlide={this.props.goToPrevSlide}></ArrowLeft>
				{itemList.itemList.length > 0 &&
					<Slide
						name={item.name}
						description={item.description}
						price={item.price}
						image={item.imagelink}
						onQuantityChange={this.props.onQuantityChange}
						quantity={item.count}
						item={item}
						itemIndex={currentIndex}
					/>

				}
				<ArrowRight goToNextSlide={this.props.goToNextSlide}></ArrowRight>
			</div>
		)
	}
}

export default Carousel
