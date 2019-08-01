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
					count: 1
				},
			}
    }
    
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	componentDidMount() {
		this.getItems();
		this.handleOnChange();
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
		const { currentIndex } = this.state.currentIndex
		if (currentIndex < 4) {
			this.setState({ currentIndex: currentIndex + 1 });
		} else {
			this.setState({ currentIndex: 0 })
		}
	}

	goToPrevSlide() {
		const { currentIndex }= this.state.currentIndex
		if (currentIndex > 0) {
			this.setState({ currentIndex: currentIndex - 1 });
		} else {
			this.setState({ currentIndex: 4 })
		}
	}
	
	handleOnChange(){
		
	}
  
	increaseCount(){
		let count = this.state.addToCart.cart.count
		count++
		let newCount = count
		this.setState({addToCart: {
										cart: {
										id: 1,
										items: {},
										count: newCount
									}
								}
							});
	}

decreaseCount(){
		let count = this.state.addToCart.cart.count
		if(count === 1){
			return
		}
		let newCount = count - 1
		this.setState({addToCart: {
										cart: {
										id: 1,
										items: {},
										count: newCount
									}
								}
							});
	}
	
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path='/' component={()=> {
          return (
          <HomePage
          itemState = {this.state}
          goToPrevSlide={this.goToPrevSlide}
					goToNextSlide={this.goToNextSlide}
					addToCart = {this.state.addToCart}				
					handleOnChange={this.handleOnChange}
					increaseCount={this.increaseCount.bind(this)}
					decreaseCount={this.decreaseCount.bind(this)}
          /> );
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



