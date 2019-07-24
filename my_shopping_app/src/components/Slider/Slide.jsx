import React, { Component } from 'react'
import styles from './index.module.css';
import AddToCart from '../AddToCart/AddToCart';

class Slide extends Component {
	render() {
		return (
			<div className={styles.slideWrapper}>
				<div>
					<img className={styles.slideImage} src={this.props.image} alt={this.props.key} />
				</div>
				<div className={styles.slideInfo}>
					<div className={styles.name}>
						<h2>{this.props.name}</h2>
					</div>
					<div className={styles.description}>
						<p>{this.props.description}</p>
					</div>
					<p className={styles.price}>${this.props.price}</p>
					<AddToCart />
				</div>
			</div>

		)
	}
}

export default Slide
