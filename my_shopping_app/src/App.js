import React, { Component } from 'react'

import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import jsonData from './components/json_source/itemsdata.json';

class App extends Component {
  constructor(props) {
		super(props)
		this.state = {
			itemList: [],
			currentIndex: 0,
			addToCart: {
				cart: {
					id: 1,
					items: {},
				},
			},
			checkOutCart: {},
			error: ""
    }
    
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
	
	}

	componentDidMount() {
		this.getItems();
	}

	getItems() {
		let itemDataArray = jsonData;
		let allItems = [];
		let randomFiveItems = [];
		itemDataArray.forEach((dataItem) => {
			let subcategoriesArray = dataItem.subcategories;
			subcategoriesArray.forEach((subItem) => {
				let itemArray = subItem.items;
				itemArray.forEach((item) => {
					item.count = 1;
					allItems.push(item);
				});
			});
		});
		for (let i = 0; i < allItems.length; i++) {
			let randomItem = allItems[Math.floor(Math.random() * allItems.length)];
			if (randomFiveItems.length < 5) {
				randomFiveItems.push(randomItem);
			}
		}
		this.setState({ itemList: randomFiveItems });
	}

  goToNextSlide() {
		let newCurrentIndex = this.state.currentIndex
		if (newCurrentIndex < 4) {
			newCurrentIndex++
			this.setState({ currentIndex: newCurrentIndex });
		} else {
			this.setState({ currentIndex: 0 })
		}
	}

	goToPrevSlide() {
		let newCurrentIndex = this.state.currentIndex
		if (newCurrentIndex > 0) {
			this.setState({ currentIndex: newCurrentIndex - 1 });
		} else {
			this.setState({ currentIndex: 4 })
		}
	}
	
	handleCartCountOnChange(value, errorVal) {
		const { itemList, currentIndex, error} = this.state;
		let currentItem = itemList[currentIndex]
		value = parseInt(value)
		if(isNaN(value)) {
			currentItem.count = "";
		} else {
			currentItem.count = value;
		}
		let errorMsg = error
		value = parseInt(value)
		if(isNaN(value)) {
			currentItem.count = "";
		} else {
			currentItem.count = value;
		}
		this.setState({itemList, error: errorMsg })
	};

  
	increaseCount(){
		const { itemList, currentIndex } = this.state;
		let currentItem = itemList[currentIndex]
		currentItem.count++
		this.setState({itemList})
	}

	decreaseCount(){
		const { itemList, currentIndex } = this.state;
		let currentItem = itemList[currentIndex]
			if(currentItem.count === 1)	{
				return
			}
		currentItem.count--
		this.setState({itemList})
	}

	checkOutCart() {
		const { itemList, currentIndex, addToCart } = this.state;
		let addedItem = itemList[currentIndex];

		let checkOutCart = addToCart.cart.items;
		checkOutCart.id = currentIndex + 1
		checkOutCart.item = addedItem
		this.setState({ checkOutCart });		
	}
	
  render() {
		const { addToCart, error } = this.state
		console.log(error);
    return (
      <div className="App">
      <Router>
        <Route exact path='/' component={()=> {
          return (
						<HomePage
							itemState = {this.state}
							goToPrevSlide={this.goToPrevSlide}
							goToNextSlide={this.goToNextSlide}
							addToCartCount = {this.state}
							addToCart = {addToCart}
							checkOutCart={this.checkOutCart.bind(this)}				
							handleCartCountOnChange={this.handleCartCountOnChange.bind(this)}
							increaseCount={this.increaseCount.bind(this)}
							decreaseCount={this.decreaseCount.bind(this)}
						/>
					 );
          }}/>
        <Route path='/shop' component={()=>{
          return <ShopPage/> 
          }}/>
        <Route path='/checkout' component={()=>{
          return <CheckOutPage/>
          }}/>       
      </Router>
    </div>
    )
  }
}

export default App



