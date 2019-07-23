import React, { Component } from 'react'
import styles from './index.module.css';

class Slide extends Component {
	render() {
		return (
			<div className={styles.slide}>
				<img src={this.props.image} alt={this.props.key} />
			</div>
		)
	}
}

export default Slide
