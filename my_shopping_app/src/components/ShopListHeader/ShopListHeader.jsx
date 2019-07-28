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
		this.props.onFilterChange(filters);
	}

	render() {
		const { title, filters } = this.props;

		return (

			<div>
				{title &&
					<div className={styles.cardsTopBar} >
						<h4>{title}</h4>
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
								type='number'
								name='max'
								onChange={this.handleMinMaxValueChange.bind(this)} />

							<button
								onClick={this.onClickFilter.bind(this, "filterByPrice")}
								className={this.getFilterClassName(filters.filterByPrice)}>
								Filter by price
							</button>

							<button
								onClick={this.onClickFilter.bind(this, "sortByPrice")}
								className={this.getFilterClassName(filters.sortByPrice)}>
								Sort by price
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
