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
		let allimages = [];
		let randomFiveImages = [];
		itemDataArray.forEach((dataItem) => {
			let subcategoriesArray = dataItem.subcategories;
			subcategoriesArray.forEach((subItem) => {
				let itemArray = subItem.items;
				itemArray.forEach((image) => {
					allimages.push(image.imagelink);
				});
			});
		});
		for (let i = 0; i < allimages.length; i++) {
			let randomImage = allimages[Math.floor(Math.random() * allimages.length)];
			if (randomFiveImages.length < 5) {
				randomFiveImages.push(randomImage);
			}
		}
		this.setState({ images: randomFiveImages });
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

		return (
			<div className={styles.slideShow} style={sliderStyle}>
				<ArrowLeft goToPrevSlide={this.goToPrevSlide}></ArrowLeft>
				<Slide image={this.state.images[this.state.currentIndex]} />
				<ArrowRight goToNextSlide={this.goToNextSlide}></ArrowRight>
			</div>
		)
	}
}

export default Carousel
