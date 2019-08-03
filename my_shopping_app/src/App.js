import React, { Component } from 'react'

import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import jsonData from './components/json_source/itemsdata.json';

import _ from 'lodash'

class App extends Component {
  constructor(props) {
		super(props)
		this.state = {
			catogoryLists: jsonData,
			openIndex: null,
			
			itemList: [],
			currentIndex: 0,

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
			addToCart: {
				cart: {
					id: 1,
					items: {},
					count: 1
				}
			},
			checkOutCart: [],
    }
    
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
	
	}

	componentDidMount() {
		this.getItems();
	}
	//Home Page
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
	
	//Number Input for Count
	handleCartCountOnChange(value) {
		const { itemList, currentIndex} = this.state;
		let currentItem = itemList[currentIndex]
		value = parseInt(value)
		if(isNaN(value)) {
			currentItem.count = "";
		} else {
			currentItem.count = value;
		}
		this.setState({itemList})
	};

  //Number Input for Count
	increaseCount(){
		const { itemList, currentIndex } = this.state;
		let currentItem = itemList[currentIndex]
		currentItem.count++
		this.setState({itemList})
	}
	//Number Input for Count
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
		const { itemList, currentIndex, checkOutCart} = this.state;
		let addedItem = itemList[currentIndex];
		let cart = checkOutCart;
		cart.push(addedItem);
		this.setState({ checkOutCart: cart });		
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
		this.setState({ selectedCategory, filteredCategory });
	}


	onFilterChange(filters) {
		const { selectedCategory } = this.state;
		console.log(filters);
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
	
  render() {
		const { checkOutCart, filteredCategory, filters, catogoryLists, openIndex } = this.state

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
							addToCart = {checkOutCart}
							checkOutCart={this.checkOutCart.bind(this)}				
							handleCartCountOnChange={this.handleCartCountOnChange.bind(this)}
							increaseCount={this.increaseCount.bind(this)}
							decreaseCount={this.decreaseCount.bind(this)}
						/>
					 );
          }}/>
        <Route path='/shop' component={()=>{
					return <ShopPage 
					itemState = {this.state}
					filteredCategory={filteredCategory}
					catogoryLists={catogoryLists}
					filters={filters}
					openIndex={openIndex}
					onFilterChange={this.onFilterChange.bind(this)}
					onCategorytItemClick={this.onCategorytItemClick.bind(this)}
					onCatogoryClick={this.onCatogoryClick.bind(this)}
					addToCartCount = {this.state}
					addToCart = {checkOutCart}
					checkOutCart={this.checkOutCart.bind(this)}				
					handleCartCountOnChange={this.handleCartCountOnChange.bind(this)}
					increaseCount={this.increaseCount.bind(this)}
					decreaseCount={this.decreaseCount.bind(this)}/> 
          }}/>
        <Route path='/checkout' component={()=>{
          return <CheckOutPage checkOutCartState = {this.state.checkOutCart}/>
          }}/>       
      </Router>
    </div>
    )
  }
}

export default App



