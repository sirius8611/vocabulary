import React from 'react'
import Header from './HeaderComponent'
import Add from './AddComponent'
import Footer from './FooterComponent'
import Library from './LibraryComponent'
import Home from './HomeComponent'
import { Route, Switch } from 'react-router-dom'
import './componentcss/main.css'


export default function Main(props) {
	return (
		<div className="row flex-middle flex-center">
			<div className="lg-5 border border-primary padding-large wrapper">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/add"><Add state={props.state} dispatch={props.dispatch}/> </Route>
					<Route path="/library" component={Library} />
				</Switch>
				<Footer />
			</div>
		</div>

	)
}