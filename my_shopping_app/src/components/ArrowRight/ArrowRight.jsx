import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

class ArrowRight extends Component {
	render() {
		return (
			<button className={styles.button} onClick={this.props.goToNextSlide}>
				<FontAwesomeIcon icon={faChevronRight} className={styles.arrow} />
			</button>
		)
	}
}

export default ArrowRight
