import React, { Component } from 'react'
import styles from './index.module.css';

class SortButtonsTab extends Component {

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
		console.log(`${filters} + "filters"`)
		this.props.onFilterChange(filters);
	}

	render() {
		const { title, filters, isButtonNeeded } = this.props;
		let showStyle = {
			display: 'flex'
		}

		let hideStyle = {
			display: 'none'
		}

		const showOrHideItems = !filters.isCatogoryListOpen ? showStyle : hideStyle
		return (

			<div style={isButtonNeeded ? showOrHideItems : showStyle}>
				{title &&
					<div className={styles.cardsTopBar} >
						<h4 className={styles.header}>{title}</h4>
						<div className={styles.sortButtonsWrapper}>
							<p className={styles.inputLabel}>min&#58;</p>
							<input
								className={styles.input}
								min="0"
								step='0.1'
								type='number'
								name='min'
								onChange={this.handleMinMaxValueChange.bind(this)} />

							<p className={styles.inputLabel}>max&#58;</p>
							<input
								className={styles.input}
								min="0"
								max="100"
								type='number'
								name='max'
								onChange={this.handleMinMaxValueChange.bind(this)} />

							<button
								onClick={this.onClickFilter.bind(this, "filterByPrice")}
								className={this.getFilterClassName(filters.filterByPrice)}>
								Filter Price
							</button>

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
