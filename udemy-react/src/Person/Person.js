import React from 'react';

//a component is just a function which returns some JSX

const person = (props) => {
	// return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>;

	return (
		<div>
			<p>
				I'm {props.name} and I'm {props.age} years old.
			</p>
			<p>{props.children}</p>
		</div>
	);
};

export default person;

//props are the attributes you would have added to the custom html-looking JSX components
