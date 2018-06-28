import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';


const Logout = () => <h2> alalalalalala je suis parti espece de mechant</h2>;
const Register = () => <p> il va vraiment falloir communiquer de facon efficiente </p>;

const App = () => {
    return (
    	<div>
    		<BrowserRouter> 
    			<div>
    				<Login />
    				<Route path ="/" />
    				<Route exact path ="/a" component = {Logout}/>
    				<Route exact path ="/b" component = {Register}/>


    			</div>
    		</BrowserRouter>
    	</div>
    );
};

export default App;
