import React, { Component } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
	render() {
		return (
			<div>
				<header className={styles.headerWrapper}>
					<div className={styles.heading}>
						<h1>My Shopping App</h1>
					</div>
					<div className={styles.headingTabs}>
						<button className={styles.goTab}>Home</button>
						<button className={styles.goTab}>Go to Shop</button>
						<button className={styles.goToCartTab}>
							<FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faCartArrowDown} />
						</button>
					</div>
				</header>
			</div>
		)
	}
}

export default Header


