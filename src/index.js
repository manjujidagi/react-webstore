export class ReactWebStore {
	
	constructor(persistent=false) {

		if (!ReactWebStore._instance) {
		  ReactWebStore._instance = this;
		  this.persistent = persistent;
		  this.key = 'rws';
		  if(persistent) {
			  this.state = localStorage.getItem(this.key) ? JSON.parse(localStorage.getItem(this.key)) : {};
		  } else {
			  this.state = {};
		  }
		}
		return ReactWebStore._instance;
	}

	store(key, payload) {
		this.state[key] = payload;
		if(this.persistent) {
			localStorage.setItem(this.key, JSON.stringify(this.state));
		}
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