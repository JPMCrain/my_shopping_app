import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class ArrowRight extends Component {
	render() {
		return (
			<button onClick={this.props.goToNextSlide}>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		)
	}
}

export default ArrowRight
