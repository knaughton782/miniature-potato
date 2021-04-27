import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
	state = {
		persons: [ { name: 'Max', age: 28 }, { name: 'Manu', age: 26 }, { name: 'Susan', age: 22 } ]
	};

	render() {
		return (
			<div className="App">
				<h1>I'm a custom React App</h1>
				<p>This is JSX</p>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[2].name} age={this.state.persons[0].age} />

				<button>Switch Name</button>
			</div>
		);
	}
}

export default App;
