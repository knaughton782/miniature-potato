//let = use for variable values, really is variable
//const = constant value

let myName = 'kirsten';
console.log(myName);

//let allows reassignment, const would cause assignment to constant variable error
myName = 'Britt';
console.log(myName);

//arrow functions

function myfunction() {
	return info;
}

const myfunction1 = () => {
	return info;
};

function printMyName(name) {
	console.log(name);
}
printMyName('kirsten');

const printMyName1 = (name) => {
	console.log(name);
};
printMyName1('superK');

//empty parenthesis if no arguments in arrow functions
//one argument no parenthesis
//if all you do is return you can omit curly braces and return keyword

//classes are used to create components, blue prints for JS objects

//properties are like variables attached to classes adn objects

// methods are like functions attached to classes and objects

//method as a property stores a function as a value, no problems with this keyword if you use the arrow function

//extract array elements or object properties and store them in variables

for (let i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`${i} fizz buzz`);
	} else if (i % 3 === 0) {
		console.log(`${i} fizz`);
	} else if (i % 5 === 0) {
		console.log(`${i} buzz`);
	} else {
		console.log(i);
	}
}
