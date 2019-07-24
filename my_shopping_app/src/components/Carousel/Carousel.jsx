import React, { Component } from 'react';
import styles from './index.module.css';

import Slide from '../Slider/Slide';
import ArrowLeft from '../ArrowLeft/ArrowLeft';
import ArrowRight from '../ArrowRight/ArrowRight';

import jsonData from '../json_source/itemsdata.json';


class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [],
			currentIndex: 0,
		}
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
	}

	componentDidMount() {
		this.getImages();
		this.timer();
	}

	getImages() {
		let itemDataArray = jsonData;
		let allItems = [];
		let randomFiveItems = [];
		itemDataArray.forEach((dataItem) => {
			let subcategoriesArray = dataItem.subcategories;
			subcategoriesArray.forEach((subItem) => {
				let itemArray = subItem.items;
				itemArray.forEach((item) => {
					allItems.push(item);
				});
			});
		});
		for (let i = 0; i < allItems.length; i++) {
			let randomImage = allItems[Math.floor(Math.random() * allItems.length)];
			if (randomFiveItems.length < 5) {
				randomFiveItems.push(randomImage);
			}
		}
		console.log(randomFiveItems)
		this.setState({ images: randomFiveItems });
	}

	timer() {
		setInterval(() => {
			if (this.state.currentIndex < 4) {
				this.setState({ currentIndex: this.state.currentIndex + 1 });
			} else {
				this.setState({ currentIndex: 0 })
			}
		}, 5000);
	}

	goToNextSlide() {
		if (this.state.currentIndex < 4) {
			this.setState({ currentIndex: this.state.currentIndex + 1 });
		} else {
			this.setState({ currentIndex: 0 })
		}
	}

	goToPrevSlide() {
		if (this.state.currentIndex > 0) {
			this.setState({ currentIndex: this.state.currentIndex - 1 });
		} else {
			this.setState({ currentIndex: 4 })
		}
	}

	render() {
		let sliderStyle = {
			transform: `translateX(${this.state.activeIndex * - 100}%)`,
			transition: '0.2s'
		}
		let { currentIndex, images } = this.state
		return (
			<div className={styles.slideShow} style={sliderStyle}>
				<ArrowLeft goToPrevSlide={this.goToPrevSlide}></ArrowLeft>
				{images.length > 0 &&
					<Slide
						name={images[currentIndex].name}
						description={images[currentIndex].description}
						price={images[currentIndex].price}
						image={images[currentIndex].imagelink} />}
				<ArrowRight goToNextSlide={this.goToNextSlide}></ArrowRight>
			</div>
		)
	}
}

export default Carousel
