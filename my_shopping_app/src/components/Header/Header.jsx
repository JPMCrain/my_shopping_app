import React, { Component } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom"

class Header extends Component {
	render() {
		const { home, shop } = this.props
		const goTab = home === true ? styles.goTabActive : styles.goTab
		const goTabShop = shop === true ? styles.goTabActive : styles.goTab
		return (
			<div>
				<header className={styles.headerWrapper}>
					<div className={styles.heading}>
						<h1>My Shopping App</h1>
					</div>
					<div className={styles.headingTabs}>
						<Link to='/'>
							<button onClick={this.props.linkOnclick} className={goTab}>Home</button>
						</Link>
						<Link to='/shop'>
							<button onClick={this.props.linkOnclick} className={goTabShop}>Go to Shop</button>
						</Link>
						<Link to='/checkout'>
							<button className={styles.goToCartTab}>
								<Link to='/checkout' />
								<FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faCartArrowDown} />
							</button>
						</Link>
					</div>
				</header>
			</div>
		)
	}
}

export default Header


