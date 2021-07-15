import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
// import {useSelector} from 'react-redux'
//state: wordlist{word, meaning}
//action
/*state: {
	wordlist: [word, meaning]
*/

export const wordListSlice = createSlice({
	name:"wordlist",
	initialState: [],
	reducers: {
		addWord: (state,action) => {
			state.push(action.payload)
		},
		removeWord: (state, action) => {
			return state.filter(w => w.word !== action.payload.word)
		},
		changeStatus: (state, action) =>{
			state.map(w =>{
				if(w.word === action.payload.word){
					w.status = !w.status;	 
				}
			})
		}
	}
})
export const selectWordList = (state) => state.wordlist
export const {addWord, removeWord, changeStatus} = wordListSlice.actions
export default wordListSlice.reducer



//action
/*
export const addWord = (string) => {
	return {type: 'wordlist/addWord', payload: string }
}
export const removeWord = (string) => {
	return {type: 'wordlist/removeWord', payload: string }
}
const initialState = []
export const wordListReducer = (state=initialState, action) =>{
	switch(action.type){
		case 'wordlist/addWord':
			return [...state, action.payload]
		case 'wordlist/removeWord':
			return state.filter(w => w.word !== action.word)
		default:
			return state
	}
}
*/