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
		const { catogoryLists, filters, openIndex } = this.props;
		return (
			<div className={styles.listWrapper}>
				<ul>
					{
						catogoryLists.map((catogory, catogoryIndex) => {
							const catlistItemStyle = openIndex === catogoryIndex ? styles.catlistItemActive : styles.catlistItem
							return (
								<li key={catogoryIndex}>
									<h4
										className={catlistItemStyle}
										onClick={() => {
											console.log(catogory.subcategories);
											this.props.onCategoryCatogoryClick(catogoryIndex)
										}}
									>
										{catogory.category}
									</h4>
									{
										this.props.openIndex === catogoryIndex &&
										<ul>
											{
												catogory.subcategories.map((item, index) => {
													return (
														<li
															className={styles.sublistItem}
															key={index}
															onClick={(e) => {
																if (filters.isItemViewPannelOpen) {
																	this.onClickFilter('isItemViewPannelOpen', undefined)
																	this.props.onCategorytItemClick(catogoryIndex, index)
																} else {
																	this.props.onCategorytItemClick(catogoryIndex, index)
																}
															}}
														>
															{item.name}
														</li>
													);
												})
											}
										</ul>
									}
								</li>
							);
						})
					}
				</ul>
			</div>
		)
	}
}

export default CatogoryList
