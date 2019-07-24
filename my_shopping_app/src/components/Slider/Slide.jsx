import React, { Component } from 'react'
import styles from './index.module.css';

class Slide extends Component {
	render() {
		return (
			<div className={styles.slideWrapper}>
				<div>
					<img className={styles.slideImage} src={this.props.image} alt={this.props.key} />
				</div>
				<div className={styles.slideInfo}>

				</div>
			</div>

		)
	}
}

export default Slide
