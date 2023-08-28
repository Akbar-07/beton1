import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import Zakazbeton from '../src/js/Zakazbeton'
import Home from './js/Home.js';
import './App.css';
import News from './js/News';
import Login from './js/Login';
import Dobblock from './js/Dobblock';
import Prozakaz from './js/Prozakaz';
import Footer from './js/Footer'
import Obman from './js/Obman';
import Article from './js/Article';
import Partners from './js/Partners';
import Loyalnost from "./js/Programma_L"
import Kankulyator from './js/Kankulyator';
import Garantiya from './js/Garantiya';
import Partners_page from './js/Partners_page';
import Pamit from './js/Pamit'
import User from './js/User';
import Layfxak from './js/Layfxak';

export default class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/Zakazbeton' element={< Zakazbeton />}></Route>
				<Route exact path='/News' element={< News />}></Route>
				<Route exact path='/Home' element={< Home />}></Route>
				<Route export path='/Login' element={<Login/>}></Route>
				<Route export path='/Dobblock' element={<Dobblock/>}></Route>
				<Route export path='/Prozakaz' element={<Prozakaz/>}></Route>
				<Route export path='/Footer' element={<Footer/>}></Route>
				<Route export path='/Article' element={<Article/>}></Route>
				<Route export path='/Obman' element={<Obman/>}></Route>
				<Route export path='/Partner' element={<Partners/>}></Route>
				<Route export path='/Loyalnost' element={<Loyalnost/>}></Route>
				<Route export path='/Kankulyator' element={<Kankulyator/>}></Route>
				<Route export path='/Garantiya' element={<Garantiya/>}></Route>
				<Route export path='/Partners_page' element={<Partners_page/>}></Route>
				<Route export path='/Pamit' element={<Pamit/>}></Route>
				<Route export path='/User' element={<User/>}></Route>
				<Route export path='/Layfxak' element={<Layfxak/>}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

