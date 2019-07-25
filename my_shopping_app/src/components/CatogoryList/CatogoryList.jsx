import React, { Component } from 'react';
import styles from './index.module.css';

import jsonData from '../json_source/itemsdata.json';

class CatogoryList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			catogoryLists: jsonData,
			openIndex: null,
		}
		this.toggleList = this.toggleList.bind(this);
	}

	toggleList(e, index) {
		e.target.style.color = '#86c4b3';
		this.setState({ openIndex: index })
	}

	render() {
		const { catogoryLists } = this.state;
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
															key={index}>
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
