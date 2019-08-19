import React, { Component } from 'react';
import styles from './index.module.css';

class CatogoryList extends Component {
	onClickFilter(filterKey, index) {
		let { filters } = this.props;
		filters[filterKey] = !filters[filterKey];
		filters.itemKey = index;
		this.props.onFilterChange(filters);
	}

	render() {
		const { catogoryLists, filters, openIndex, isButtonNeeded } = this.props;
		const buttonHidden = {
			display: 'none',
		}
		const showButton = {
			display: 'block',
		}
		const catogoryHidden = {
			display: 'none',
		}
		const showCatogory = {
			display: 'flex',
		}

		let buttonStyle = !isButtonNeeded ? buttonHidden : showButton;
		let catogoryListStyle = !filters.isCatogoryListOpen ? catogoryHidden : showCatogory;

		return (
			<div>
				<button
					style={buttonStyle}
					onClick={() => {
						this.onClickFilter('isCatogoryListOpen', undefined)
						this.props.openCatogoryList()
					}}
					className={styles.OpenCatogories}>Open/Close</button>
				<div className={styles.listWrapper} style={catogoryListStyle}>
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

																		this.onClickFilter('isCatogoryListOpen', undefined)
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
