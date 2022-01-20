export class ReactWebStore {
	
	constructor() {
		if (!ReactWebStore._instance) {
		  ReactWebStore._instance = this;
		}
		this.state = {};
		return ReactWebStore._instance;
	}

	store(key, payload) {
		this.state[key] = payload;
		const event = new CustomEvent(key);
		document.dispatchEvent(event);
	}

	subscribe(key, listener) {
		document.addEventListener(key, listener);
	}

	getStore(key=null) {
		if(!key)
			return this.state;
		else
			return this.state[key];
	}

}