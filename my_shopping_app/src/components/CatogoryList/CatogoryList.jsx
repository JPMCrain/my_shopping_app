import React, { Component } from 'react';
import styles from './index.module.css';

class CatogoryList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpened: false,
			display: 'none'
		}
		this.toggleCatogories = this.toggleCatogories.bind(this)
	}


	onClickFilter(filterKey, index) {
		let { filters } = this.props;
		filters[filterKey] = !filters[filterKey];
		filters.itemKey = index;
		this.props.onFilterChange(filters);
	}

	toggleCatogories() {
		const { display } = this.state
		if (display === 'none') {
			this.setState({
				isOpened: true,
				display: 'flex'
			})
		} else {
			this.setState({
				isOpened: false,
				display: 'none'
			})
		}
	}

	render() {
		const { catogoryLists, filters, openIndex } = this.props;
		const style = {
			display: this.state.display,
		}
		return (
			<div>
				<button
					onClick={() => {
						this.toggleCatogories()
					}}
					className={styles.OpenCatogories}>Open/Close</button>
				<div className={styles.listWrapper} style={style}>
					{
						catogoryLists.map((catogory, catogoryIndex) => {
							const catlistItemStyle = openIndex === catogoryIndex ? styles.catlistItemActive : styles.catlistItem
							return (
								<div key={catogoryIndex}>
									<button className={catlistItemStyle}
										onClick={(e) => {
											this.props.onCatogoryClick(catogoryIndex)
										}}>
										{catogory.category}
									</button>


									{
										this.props.openIndex === catogoryIndex &&
										<div>
											{
												catogory.subcategories.map((item, index) => {

													return (
														<div>
															<button
																className={styles.sublistItem}
																key={index}
																onClick={(e) => {
																	if (filters.isItemViewPannelOpen) {
																		this.onClickFilter('isItemViewPannelOpen', undefined)
																		this.props.onCategorytItemClick(catogoryIndex, index)
																	} else {
																		this.props.onCategorytItemClick(catogoryIndex, index)
																	}
																}}>
																{item.name}
															</button>

														</div>
													);
												})
											}
										</div>
									}
								</div>
							);
						})
					}
				</div>
			</div>

		)
	}
}

export default CatogoryList
