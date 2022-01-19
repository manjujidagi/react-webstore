export class ReactWebStore {
	constructor() {
		this.state = {};
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