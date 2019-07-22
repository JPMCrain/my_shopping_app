import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class ArrowLeft extends Component {
	render() {
		return (
			<button onClick={this.props.goToPrevSlide}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
		)
	}
}

export default ArrowLeft
