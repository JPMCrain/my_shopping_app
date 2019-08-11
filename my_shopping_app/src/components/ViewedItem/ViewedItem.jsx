import React from 'react'
import styles from './index.module.css';
import AddToCart from '../AddToCart/AddToCart';
import AddtoCartCount from '../AddToCartCount/AddtoCartCount';
import store from '../../data';

function ViewedItem(props) {
	return (
		<div onClick={props.onItemClick} className={styles.viewedItem__wrapper}>
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
					<button onClick={props.onItemClick} className={styles.exitButton}>X</button>
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
						<AddtoCartCount
							quantity={props.quantity}
							onQuantityChange={props.onQuantityChange} />
					</div>
					<div className={styles.addToCart}>
						<AddToCart
							addToCart={() => {
								const cart = store.getValue('cart', []);
								cart.push(this.props.item);
								store.notifyChange('cart', cart);
							}} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewedItem;