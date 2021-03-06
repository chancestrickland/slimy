// source: https://github.com/sdras/night-owl-vscode-theme/blob/master/demo/js.js
"use strict";
import React from "react";

class FakeClass {}

let popper = function () {
	return "popper";
};

let fake = new FakeClass();
let str = "Fake news";

let topper = () => "topper";

function stopper() {
	return "stopper";
}

let cop = (str) => `Freeze! ${str}`;

let jsxTest = () => <span>Testing JSX</span>;

cop`Drop the weapon! ${cop`Do it now! ${() => <span>This is nonsense</span>}`}`;

class Sale extends FakeClass {
	constructor(price) {
		super(price);
		[this.decoratorsList, this.price] = [[], price];
	}

	decorate(decorator) {
		if (!Sale[decorator]) throw new Error(`decorator not exist: ${decorator}`);
		this.decoratorsList.push(Sale[decorator]);
	}

	getPrice() {
		for (let decorator of this.decoratorsList) {
			this.price = decorator(this.price);
		}
		return this.price.toFixed(2);
	}

	static quebec(price) {
		// this is a comment
		return price + (price * 7.5) / 100;
	}

	static fedtax(price) {
		return price + (price * 5) / 100;
	}
}

let sale = new Sale(100);
sale.decorate("fedtax");
sale.decorate("quebec");
console.log(sale.getPrice()); //112.88

const doAThing = {
	help: "me",
	doaThing: 5,
};

getPrice();

//deeply nested

async function asyncCall({ pop: popAWeasel, toot }) {
	var result = await resolveAfter2Seconds();
}

const options = {
	connections: {
		compression: false,
	},
};

for (let i = 0; i < 10; i++) {
	continue;
}

if (true) {
}

while (true) {}

switch (2) {
	case 2:
		break;
	default:
		break;
}

class EditFishForm extends Component {
	static propTypes = {
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		index: PropTypes.string,
		fish: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string.isRequired,
		}),
	};
}
