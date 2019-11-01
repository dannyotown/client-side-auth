import "./App.css"
import React from "react"
import {Link, Route} from 'react-router-dom'
import SignIn from './SignIn';
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import {getToken} from '../utils/api';
import Logout from "./Logout";

function App() {
	const signedIn = getToken()
	return (
		<div className="wrapper">
			<nav>
				<Link to='/'>Home</Link>
				{!signedIn && <Link to='/signin'>Sign in</Link>}
				{signedIn && <Link to="/account">My Account</Link>}
				{signedIn && <Link to="/logout">Logout</Link>}
			</nav>
			<Route exact path='/signin' component={SignIn}/>
			<ProtectedRoute exact path='/account' component={Account}/>
			<ProtectedRoute exact path='/logout' component={Logout}/>
		</div>
	)
}

export default App
