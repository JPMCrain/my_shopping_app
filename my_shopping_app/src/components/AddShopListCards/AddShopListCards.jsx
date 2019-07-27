import React, { Component } from 'react'
import styles from './index.module.css';
import ItemCard from '../ItemCard/ItemCard';
import cloneDeep from 'lodash/cloneDeep';


class AddShopListCards extends Component {

	constructor(props) {
		super(props)
		console.log(props)
		this.state = {
			originalItems: props.recievedItems,
			filteredItems: {},
			isFiltered: false
		}
		// this.onClickSortByPrice = this.onClickSortByPrice.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			originalItems: newProps.recievedItems,
		})
	}

	sortByPrice() {
		const { originalItems, isFiltered } = this.state;
		const sortedItems = cloneDeep(originalItems);
		if (isFiltered === false) {
			sortedItems.items.sort(function (a, b) {
				return parseFloat(b.price) - parseFloat(a.price);
			});
			this.setState({
				filteredItems: sortedItems,
				isFiltered: true
			});
		} else {
			this.setState({
				isFiltered: false
			});
		}
	}

	// onClickSortByPrice() {
	// 	this.sortByPrice()
	// }

	render() {
		const { originalItems } = this.state;

		console.log(this.state.filteredItems)
		return (
			<div>
				{
					originalItems.items !== undefined &&
					<div className={styles.Wrapper}>

						<div className={styles.cardsWrapper}>
							{
								originalItems.items.map((item, index) => {
									return (
										<ItemCard
											key={index}
											image={item.imagelink}
											name={item.name}
											price={item.price}
										/>
									)
								})
							}
						</div>
					</div>
				}
			</div>
		)
	}
}

export default AddShopListCards
