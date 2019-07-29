import React from 'react'
import styles from './index.module.css';
import AddToCart from '../AddToCart/AddToCart';

function ViewedItem(props) {
	return (
		<div className={styles.viewedItem__wrapper}>
			<div className={styles.viewedItem__section1} >
				<img className={styles.viewedItem__image} src={props.image} alt="" />
			</div>
			<div className={styles.viewedItem__section2}>
				<div className={styles.viewedItem__heading}>
					<div className={styles.heading}>
						<div className={styles.h2}>
							<h2>{props.name}</h2>
						</div>
					</div>
					<button onClick={props.onClick} className={styles.exitButton}>X</button>
				</div>
				<div className={styles.viewedItem__description}>
					<p>Rating: {props.rating}stars</p>
					<p>{props.description}</p>
				</div>
				<div className={styles.viewedItem__price}>
					<p className={styles.price}>$ {props.price}</p>
					<p>In Stock: {props.stock}</p>
				</div>
				<div className={styles.viewedItem__addToCart}>
					<div className={styles.itemQuantity}>

					</div>
					<div className={styles.addToCart}>
						<AddToCart />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewedItem;