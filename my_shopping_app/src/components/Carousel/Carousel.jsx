import React, { Component } from 'react';
import styles from './index.module.css';

import Slider from '../Slider/Slider';
import ArrowLeft from '../ArrowLeft/ArrowLeft';
import ArrowRight from '../ArrowRight/ArrowRight';

import jsonData from '../json_source/itemsdata.json';


class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [],
		}
	}

	componentDidMount() {
		this.getImages();
	}

	getImages() {
		let itemDataArray = jsonData;
		let allimages = [];
		itemDataArray.forEach((dataItem) => {
			let subcategoriesArray = dataItem.subcategories;
			subcategoriesArray.forEach((subItem) => {
				let itemArray = subItem.items;
				itemArray.forEach((image) => {
					allimages.push(image.imagelink);
				});
			});
		});
		this.setState({ images: allimages });
	}

	goToNextSlide() {

	}

	goToPrevSlide() {

	}

	render() {

		return (
			<div className={styles.slideShow}>
				<ArrowLeft goToPrevSlide={this.goToPrevSlide}></ArrowLeft>
				<Slider></Slider>
				<ArrowRight goToNextSlide={this.goToNextSlide}></ArrowRight>
			</div>
		)
	}
}

export default Carousel
