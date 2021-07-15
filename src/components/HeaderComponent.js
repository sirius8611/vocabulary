import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './componentcss/main.css'
function Navbar() {
	return (
		<nav class="margin-bottom-medium split-nav">
			<div className="nav-brand ">
				{/* <h3><Link to="/">Vocabulary</Link></h3> */}
				<h3>Vocabulary</h3>
			</div>
			<div class="collapsible">
			<input id="collapsible1" type="checkbox" name="collapsible1" />
			<label for="collapsible1">
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
				</label>
			<div className="collapsible-body">
				<ul className="inline">
					<li><NavLink to="/"><i class="bi bi-chat"></i></NavLink></li>
					<li>
						<NavLink to="/add"><i class="bi bi-pen"></i></NavLink>
					</li>
					<li>
						<NavLink to="/library"><i class="bi bi-book"></i></NavLink>
					</li>
				</ul>
			</div>
			</div>

		</nav>
	)
}
class Header extends Component {
	render() {
		return (
			<Navbar />
		)
	}
}
export default Header