import React, { Component } from 'react'
import Header from '../../components/Header/Header.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';

class HomePage extends Component {
	render() {
		return (
			<div>
				<Header />
				<Carousel />
			</div>
		)
	}
}

export default HomePage
