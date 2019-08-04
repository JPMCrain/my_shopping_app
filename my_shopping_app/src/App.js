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
			Home: true,
			Shop: false,
			catogoryLists: jsonData,
			openIndex: null,
			
			itemList: [],
			homeSliderList: [],
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
			homeSliderList: randomFiveItems,});
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
		// const { itemList, currentIndex} = this.state;
		// let currentItem = itemList[currentIndex]
		// value = parseInt(value)
		// if(isNaN(value)) {
		// 	currentItem.count = "";
		// } else {
		// 	currentItem.count = value;
		// }
		// let total = currentItem.count * currentItem.price
		// currentItem.total = total
		// this.setState({itemList})
	};

  //Number Input for Count
	increaseCount(index){
		const { filteredCategory, itemList } = this.state;
		if(filteredCategory){
			let currentItem = filteredCategory.items[index]
			
			++currentItem.count
			
			let total = currentItem.count * currentItem.price
			currentItem.total = total
			this.setState({filteredCategory})
		} else {
			let currentItem = itemList[index]
			
			currentItem.count++

			let total = currentItem.count * currentItem.price
			currentItem.total = total
			this.setState({itemList})
		}

	}
	//Number Input for Count
	decreaseCount(index){
		const { filteredCategory, itemList } = this.state;
		if(filteredCategory){
			let currentItem = filteredCategory.items[index]
			if(currentItem.count === 1){
				return
			}
			--currentItem.count
		
			let total = currentItem.count * currentItem.price
			currentItem.total = total

			this.setState({filteredCategory})
		} else {
			let currentItem = itemList[index]
			if(currentItem.count === 1){
				return
			}

			--currentItem.count

			let total = Math.round(currentItem.count * currentItem.price)
			currentItem.total = total

			this.setState({itemList})
		}

	}

	checkOutCart(cartItem, index) {
		const { checkOutCart } = this.state;
		let addedItem = cartItem;
		let cart = _.cloneDeep(checkOutCart);
		cart.push(addedItem);

		this.setState({ 
			checkOutCart: cart, 
		});	
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

	linkOnclick(){	
		let { Home, Shop } = this.state;
		Home = !Home;
		Shop = !Shop;
		this.setState({Home, Shop})
	}

  render() {
		const { Home, Shop, checkOutCart, filteredCategory, filters, catogoryLists, openIndex } = this.state

		return (
      <div className="App">
      <Router>
        <Route exact path='/' component={()=> {
          return (
						<HomePage
							linkOnclick={this.linkOnclick.bind(this)}
							home={Home}
							shop={Shop}
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
						linkOnclick={this.linkOnclick.bind(this)}
						home={Home}
						shop={Shop}
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



