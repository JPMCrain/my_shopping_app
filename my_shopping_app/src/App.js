import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import jsonData from './components/json_source/itemsdata.json';
import store from './data'

import _ from 'lodash'

class App extends Component {
  constructor(props) {
		super(props)
		this.state = {
			currentItems: [],
			catogoryLists: jsonData,
			openIndex: null,
			linkName : 'home',
			itemList: [],
			homeSliderList: [],
			currentIndex: 0,
			loading: true,

			selectedCategory: undefined,
			filteredCategory: undefined,
			filters: {
				sortByPrice: false,
				filterByPrice: false,
				filterByStock: false,
				isItemViewPannelOpen: false,
				itemKey: undefined,
				min: undefined,
				max: undefined,
			},
			cart: [],
    }
    
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
		this.onQuantityChange = this.onQuantityChange.bind(this)
	}

	componentDidMount() {
		this.getItems();	
		store.listen('cart', this.onCartChange);
	}

	//Home Page
	getItems() {
		let itemDataArray = jsonData;
		let allItems = [];
		let randomAll = [];
		let randomFiveItems = [];
		itemDataArray.forEach((dataItem) => {
			let subcategoriesArray = dataItem.subcategories;
			allItems.push(subcategoriesArray);
			subcategoriesArray.forEach((subItem) => {
				let itemArray = subItem.items;
				itemArray.forEach((item) => {
					item.count = 1;	
					item.total = item.price;
					randomAll.push(item);
				});
			});
		});
		for (let i = 0; i < randomAll.length; i++) {
			let randomItem = randomAll[Math.floor(Math.random() * randomAll.length)];
			if (randomFiveItems.length < 5) {
				randomFiveItems.push(randomItem);
			}
		}
		this.setState({ 
			itemList: randomFiveItems, 
			homeSliderList: randomFiveItems,
			linkName: 'home',
			currentItems: randomFiveItems,
			loading: false,});
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
	
	//Number Input for Count
	onQuantityChange(quantity, index) {
		const { currentItems, linkName } = this.state;
		console.log(currentItems)
		console.log(linkName)
		if(linkName === 'home'){
			let currentItem = currentItems[index]
			currentItem.count = quantity;
			currentItem.total = Math.round(currentItem.count * currentItem.price).toFixed(2)
			this.setState({currentItems})
		}
		if(linkName === 'shop'){
			let currentItem = currentItems.items[index]
			currentItem.count = quantity;
			currentItem.total = Math.round(currentItem.count * currentItem.price).toFixed(2)
			this.setState({currentItems})
		}	
	};

	onCartChange(cart) {
		console.log(cart)
		// const { currentItems, checkOutCart, linkName } = this.state;
		// let addedItem = cartItem;
		// let cart = _.cloneDeep(checkOutCart);
		// cart.push(addedItem);
		// if(linkName === 'home'){
		// 	currentItem.count = 1;
		// 	let total = Math.round(currentItem.count * currentItem.price).toFixed(2)
		// 	currentItem.total = total
		// 	this.setState({ 
		// 		currentItems,
		// 		checkOutCart: cart
		// 	});
		// }
		// if(linkName === 'shop'){
		// 	let currentItem = currentItems.items[index];
		// 	currentItem.count = 1;
		// 	let total = Math.round(currentItem.count * currentItem.price).toFixed(2)
		// 	currentItem.total = total
		// 	this.setState({ 
		// 		currentItems,
		// 		checkOutCart: cart
		// 	});
		// }
	}

	removedItem(newCheckoutCart){
		this.setState({checkOutCart: newCheckoutCart})
	}

	//Shop Page
	onCatogoryClick(index) {
		const { catogoryLists} = this.state
	
		let newSelectedCategory = catogoryLists[index].subcategories;

		this.setState({
										openIndex: index, 
										selectedCategory: newSelectedCategory,
										filteredCategory: newSelectedCategory
									});
	}

	onCategorytItemClick = (catogoryIndex, index) => {
		const selectedCategory = jsonData[catogoryIndex].subcategories[index];
		const { filters } = this.state;
		const filteredCategory = this.filterCategoryItems(selectedCategory, filters);
		this.setState({ selectedCategory, 
										filteredCategory, 
										currentItems: filteredCategory  });
	}


	onFilterChange(filters) {
		const { selectedCategory } = this.state;
		const filteredCategory = this.filterCategoryItems(selectedCategory, filters)
		this.setState({ filters, filteredCategory });
	}

	filterCategoryItems(category, filters) {
		const filteredCategory = _.cloneDeep(category);

		if (filters.sortByPrice) {
			this.sortByPrice(filteredCategory)
		}

		if (filters.filterByStock) {
			this.filterByStock(filteredCategory)
		}

		if (filters.filterByPrice) {
			this.filterByPrice(filteredCategory)
		}

		return filteredCategory;
	}

	sortByPrice(filteredCategory) {
		filteredCategory.items.sort(function (a, b) {
			return parseFloat(b.price) - parseFloat(a.price);
		});
	}

	filterByStock(filteredCategory) {
		let newfilteredCategory = filteredCategory.items.filter((item) => {
			return item.stock > 0;
		});
		filteredCategory.items = newfilteredCategory;
	}

	filterByPrice(filteredCategory) {
		const { filters } = this.state;
		const expectedMin = filters.min || 0
		let newfilteredCategory = filteredCategory.items.filter((item) => {
			const expectedMax = filters.max || item.price
			const min = Math.min(expectedMin, expectedMax);
			const max = Math.max(expectedMin, expectedMax);
			return item.price >= min && item.price <= max
		});
		filteredCategory.items = newfilteredCategory;
	}

	linkOnclick(linkName) {	
		const {filteredCategory, itemList} = this.state
		if(linkName === 'home') {
			this.setState({
				linkName,
				currentItems: itemList
			})
		} else if (linkName === 'shop'){
			this.setState({
				linkName,
				currentItems: filteredCategory 
			})
		}else {
			this.setState({
				linkName,
				currentItems: [], 
			})
		}
		
	}

  render() {
	const { 
		linkName, 
		cart, 
		filteredCategory, 
		filters, 
		catogoryLists, 
		openIndex 
	} = this.state
	console.log(linkName)
		if(this.state.loading) {
			return 'Loading...'
		} 
		return (
      <div className="App">
      <Router>
        <Route exact path='/' component={()=> {
          return (
						<HomePage
							linkName={this.state.linkName}
							linkOnclick={this.linkOnclick.bind(this)}
							itemState = {this.state}
							goToPrevSlide={this.goToPrevSlide}
							goToNextSlide={this.goToNextSlide}
							onQuantityChange={this.onQuantityChange}
						/>
					 );
          }}/>
        <Route path='/shop' component={()=>{
					return <ShopPage 
						linkName={this.state.linkName}
						linkOnclick={this.linkOnclick.bind(this)}
						itemState = {this.state}
						filteredCategory={filteredCategory}
						catogoryLists={catogoryLists}
						filters={filters}
						openIndex={openIndex}
						index={this.props.index}
						item={this.props.item}
						onFilterChange={this.onFilterChange.bind(this)}
						onCategorytItemClick={this.onCategorytItemClick.bind(this)}
						onCatogoryClick={this.onCatogoryClick.bind(this)}
						onQuantityChange={this.onQuantityChange}
						/> 
          }}/>
        <Route path='/checkout' component={()=>{
					return <CheckOutPage
					linkName={this.state.linkName} 
					linkOnclick={this.linkOnclick.bind(this)}
					handleSubmit = {this.handleSubmit}
					handleOnchange = {this.handleOnchange}
					removedItem={this.removedItem.bind(this)}/>
          }}/>       
      </Router>
    </div>
    )
  }
}

export default App



