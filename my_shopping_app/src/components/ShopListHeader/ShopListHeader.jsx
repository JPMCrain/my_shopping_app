import React, { Component } from 'react'
import styles from './index.module.css';

class SortButtonsTab extends Component {

	constructor(props) {
		super(props)
		this.state = {
			originalItems: props.recievedItems,
			SortByPrice: false,
		}
		// this.onClickSortByPrice = this.onClickSortByPrice.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			originalItems: newProps.recievedItems,
		})
	}
	// onClickSortByPrice(e) {
	// 	const { SortByPrice } = this.state;
	// 	if (SortByPrice === false) {
	// 		e.target.style.color = '#18202C';
	// 		e.target.style.backgroundColor = '#86c4b3';
	// 		this.props.onClickSortByPrice();
	// 		this.setState({ SortByPrice: true });
	// 	} else if (SortByPrice === true) {
	// 		e.target.style.color = '#86c4b3';
	// 		e.target.style.backgroundColor = '#18202C';
	// 		this.props.onClickSortByPrice();
	// 		this.setState({ SortByPrice: false });
	// 	}
	// }

	render() {
		const { originalItems } = this.state
		return (

			<div>
				{originalItems !== undefined &&
					<div className={styles.cardsTopBar} >
						<h4>{originalItems.name}</h4>
						<div className={styles.sortButtonsWrapper}>
							<p className={styles.inputLabel}>min&#58;</p>
							<input className={styles.input} min="0" step=".1" type='number' />
							<p className={styles.inputLabel}>max&#58;</p>
							<input className={styles.input} min="0" step=".1" type='number' />
							<button className={styles.sortButton}>Filter by price</button>
							<button onClick={(e) => {
								this.onClickSortByPrice(e);
							}} className={styles.sortButton}>Sort by price</button>
							<button className={styles.sortButton}>Stock Only</button>
						</div >
					</div>
				}

			</div>
		)
	}
}

export default SortButtonsTab
