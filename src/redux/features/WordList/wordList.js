import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {removeWord, selectWordList, changeStatus } from './wordListSlice';
import './wordList.css'
export const WordList = () => {
	const dispatch = useDispatch()
	const wordlist = useSelector(selectWordList)
	let btnColor, numberOfLearnedWord = 0
	const [modalContent, setContent] = useState({ title: '', text: '' })
	function popModal(component) {
		setContent({ title: component.word, text: component.meaning })
	}
	function handleClick(component) {
		dispatch(changeStatus(component))
	}
	function handleDelete(component) {
		dispatch(removeWord(component))
	}
	function congrats(perc){
		if(perc===100){
		return (
			
			<h1 className="text-center">Damn you kill the vocabs. Congrats!!!!!<i class="bi bi-emoji-sunglasses"></i><i class="bi bi-emoji-sunglasses"></i></h1>
		)
		}
		else{
			return <span></span>
		}
	}
	const list = wordlist.map(w => {
		numberOfLearnedWord += w.status === false ? 1 : 0
		const wordStatus = w.status ? 'New' : 'Learned'
		btnColor = w.status ? 'btn-danger' : 'btn-success'
		return (
			<React.Fragment>
				<div className="md-9 col">
					<label for='modal-1' onClick={() => popModal(w)} className="btn-block paper-btn text-center">{w.word}</label>
				</div>
				<div className="md-2 col wordBtn">
					<button className={btnColor} onClick={() => handleClick(w)}>{wordStatus}</button>
				</div>
				<div className="md-1 col wordBtn">
					<button className="text-center" onClick={() => handleDelete(w)}><i class="bi bi-hand-thumbs-down"></i></button>
				</div>
				{/* <fieldset class="form-group">
						<label for="status" class="paper-switch-tile">
							<input id="status" name="status" type="checkbox" />
							<div class="paper-switch-tile-card border">
								<div class="paper-switch-tile-card-front status-paper border background-danger">New</div>
								<div class="paper-switch-tile-card-back status-paper border background-success">Learned</div>
							</div>
						</label>
					</fieldset> */}
			</React.Fragment>
		)
	})
	let percent = Math.round(numberOfLearnedWord/(wordlist.length) * 100)
	let progressPercent = `bar success w-${percent}`	
	console.log(numberOfLearnedWord)
	console.log(wordlist.length)
	const message = (num) => {
		let text = num<= 1 ? 'word. Finally!' : 'words'
		if(num === 0){
			return <span className="text-danger">nothing, you lazy.</span>
		}
		else{
			return <span className="text-success">{num} {text}</span> 
		}
	}
	return (
		<div className="row flex-center">
			<div className="col-12 col">
				You have learned {message(numberOfLearnedWord)}
			</div>
			{list}
			<div className="col-9 col ">
			<div className="progress flex-center margin-bottom margin-top-large">
			<div className={progressPercent}>
			</div>
		      </div>
		      </div>
		      	<div className="col-12 col">{congrats(percent)}</div>
			<input className="modal-state" id="modal-1" type="checkbox" />
			<div className="modal col-12 col">
				<label className="modal-bg" for="modal-1"></label>
				<div className="modal-body">
					<label className="btn-close" for="modal-1">X</label>
					<h2 className="modal-title">{modalContent.title}</h2>
					<h4 className="modal-text">{modalContent.text}</h4>
					<label for='modal-1' className="border paper-btn">Got it!</label>
				</div>
			</div>
		</div>
	)
}