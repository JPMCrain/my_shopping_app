import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

class ArrowLeft extends Component {
	render() {
		return (
			<button className={styles.button} onClick={this.props.goToPrevSlide}>
				<FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} />
			</button>
		)
	}
}

export default ArrowLeft
