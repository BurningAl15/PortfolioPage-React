import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Navbar from './components/Navbar'
import KnowMe from './pages/KnowMe';
import ContactMe from './pages/ContactMe';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<KnowMe />, document.getElementById('root'));
// ReactDOM.render(<ContactMe />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
