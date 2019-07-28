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

	render() {
		const { title, filters } = this.props;
		return (

			<div>
				{title &&
					<div className={styles.cardsTopBar} >
						<h4>{title}</h4>
						<div className={styles.sortButtonsWrapper}>
							<p className={styles.inputLabel}>min&#58;</p>
							<input className={styles.input} min="0" step=".1" type='number' />
							<p className={styles.inputLabel}>max&#58;</p>
							<input className={styles.input} min="0" step=".1" type='number' />

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
