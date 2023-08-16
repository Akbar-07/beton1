import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import Zakazbeton from '../src/js/Zakazbeton'
import Home from './js/Home';
import './App.css';
import News from './js/News';
import Login from './js/Login';


class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		<Routes>
				<Route exact path='/' element={< News />}></Route>
				<Route exact path='/Zakazbeton' element={< Zakazbeton />}></Route>
				<Route exact path='/News' element={< News />}></Route>
				<Route exact path='/Home' element={< Home />}></Route>
				<Route export path='/Login' element={<Login/>}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
