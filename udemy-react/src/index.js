import React from 'react'; // react library
import ReactDOM from 'react-dom'; // glue between react elements and the dom
import './index.css'; 
import App from './App'; // app component
import registerServiceWorker from './registerServiceWorker'; // faster loading in production





// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }
// const greeting = <h1>Current date: {getCurrentDate()}</h1>


ReactDOM.render(<App />, document.getElementById('root')); //two arguments: app element and root id in html file
// ReactDOM.render(greeting, document.getElementById('root')); //two arguments: app element and root id in html file
registerServiceWorker();
