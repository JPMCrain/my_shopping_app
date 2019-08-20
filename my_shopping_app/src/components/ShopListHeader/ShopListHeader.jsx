import React, { Component } from 'react'
import styles from './index.module.css';

class SortButtonsTab extends Component {
	constructor(props) {
		super(props)
		this.state = {
			min: 0,
			max: 0,
		}
	}


	onClickFilter(filterKey) {
		let { filters } = this.props;
		filters[filterKey] = !filters[filterKey];
		this.props.onFilterChange(filters);
	}

	getFilterClassName(filtered) {
		return filtered ? styles.sortButtonSelected : styles.sortButton;
	}

	handleMinMaxValueChange(e) {
		let { filters } = this.props;
		const filterKey = e.target.name;
		filters[filterKey] = e.target.value;
		console.log(filters)
		this.props.onFilterChange(filters);

	}

	render() {
		// const { min, max } = this.state;
		const { title, filters, isButtonNeeded } = this.props;
		let showStyle = {
			display: 'flex'
		}

		let hideStyle = {
			display: 'none'
		}

		const showOrHideItems = !filters.isCatogoryListOpen ? showStyle : hideStyle

		const showOrHideInput = !filters.isFilterByPrice ? hideStyle : showStyle
		return (

			<div style={isButtonNeeded ? showOrHideItems : showStyle}>
				{title &&
					<div className={styles.cardsTopBar} >
						<h4 className={styles.header}>{title}</h4>
						<div className={styles.sortButtonsWrapper}>
							<div className={styles.filterByPriceWrapper}>

								<button
									onClick={this.onClickFilter.bind(this, "isFilterByPrice")}
									className={this.getFilterClassName(filters.isFilterByPrice)}>
									Filter Price
								</button>

								<button style={showOrHideInput}
									onClick={() => {
										this.onClickFilter("isFilterByPrice")
										this.onClickFilter("filterByPrice")
									}}
									className={this.getFilterClassName(filters.filterByPrice)}>
									Ok
								</button>
								<div
									style={showOrHideInput}
									className={styles.inputs__wrapper}>
									<p className={styles.inputLabel}>min&#58;</p>
									<input
										className={styles.input}
										min="0"
										step='0.1'
										type='number'
										name='min'
										value={filters.min}
										onChange={this.handleMinMaxValueChange.bind(this)} />

									<p className={styles.inputLabel}>max&#58;</p>
									<input
										className={styles.input}
										min="0"
										max="100"
										type='number'
										name='max'
										value={filters.max}
										onChange={this.handleMinMaxValueChange.bind(this)} />
								</div>
							</div>

							<button
								onClick={this.onClickFilter.bind(this, "sortByPrice")}
								className={this.getFilterClassName(filters.sortByPrice)}>
								Sort Price
							</button>

							<button
								onClick={this.onClickFilter.bind(this, "filterByStock")}
								className={this.getFilterClassName(filters.filterByStock)}>
								Stock Only
							</button>

						</div >
					</div>
				}

			</div>
		)
	}
}

export default SortButtonsTab
