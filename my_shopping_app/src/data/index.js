class Store {

	constructor() {
		this.data = {}
		this.observers = {}
	}

	listen(dataKey, observer) {
		if(!this.observers[dataKey]) {
			this.observers[dataKey] = []
		}
		this.observers[dataKey].push(observer);
	}

	notifyChange(dataKey, newValue) {
		this.data[dataKey] = newValue;
		const dataObservers = this.observers[dataKey];
		if(!dataObservers) {
			return
		}
		for(const dataObserver of dataObservers) {
			dataObserver(newValue);
		}
	}

	getValue(dataKey, defaultValue) {
		return this.data[dataKey] || (this.data[dataKey] = defaultValue)
	}

}

if(!window.store) {
	window.store = new Store();
}

export default window.store;