import React, { Component } from 'react'
import {Switch,Route,  Redirect} from 'react-router-dom'
import { WordList } from '../redux/features/WordList/wordList'
class Library extends Component{
	render(){
		return(
				<WordList />
		)
	}
}
export default Library