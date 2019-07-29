import React, { Component } from 'react';
import styles from './index.module.css';

import jsonData from '../json_source/itemsdata.json';

class CatogoryList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			catogoryLists: jsonData,
			openIndex: null
		}
		this.onCategorytItemClick = this.onCategorytItemClick.bind(this);
	}

	toggleList(e, index) {
		e.target.style.color = '#86c4b3';
		this.setState({ openIndex: index })
	}

	onClickFilter(filterKey, index) {
		let { filters } = this.props;
		filters[filterKey] = !filters[filterKey];
		filters.itemKey = index;
		this.props.onFilterChange(filters);
	}

	onCategorytItemClick = (catogoryIndex, index) => {
		const category = jsonData[catogoryIndex].subcategories[index];
		this.props.onCategorytItemClick(category);
	}

	render() {
		const { catogoryLists } = this.state;
		const { filters } = this.props;
		return (
			<div className={styles.listWrapper}>
				<ul>
					{
						catogoryLists.map((catogory, catogoryIndex) => {
							return (
								<li key={catogoryIndex}>
									<h4
										className={styles.catlistItem}
										onClick={(e) => {
											this.toggleList(e, catogoryIndex);
										}}>
										{catogory.category}
									</h4>
									{
										this.state.openIndex === catogoryIndex &&
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
																	this.onCategorytItemClick(catogoryIndex, index)
																} else {
																	this.onCategorytItemClick(catogoryIndex, index)
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
