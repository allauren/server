import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
  <div class = 'input'>
  	<h1> register </h1> 
  		<form action="register" method="get">
       		 <input type="submit" value="register" />
   		</form>
 		 <h1> login</h1> 
 		<form action="login" method="post">
	  	    <div>
		        <label>Username:</label>
		       		 <input type="text" name="username" />
		  	</div>
		   	<div>
		        <label>Password:</label>
		     	<input type="password" name="password" />
		    </div>
		    <div>
		      	  <input type="submit" value="login" />
	     	 </div>
  		  </form>
 </div>

			)
	}		
};

export default Login;