import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWord, removeWord, selectWordList } from '../redux/features/WordList/wordListSlice'
import './componentcss/learn.css'
const Add = () => {
	const dispatch = useDispatch()
	const [string, setString] = useState({word: '', meaning: '', status: true})
	function handleChange(event) {
		const { value, name}  = event.target
		setString({...string, [name]: value})
	}
	function handleAdd() {
		dispatch(addWord(string))
		setString({...string, word: '', meaning: ''})
	}
	return (
		<div className="row flex-center">
			<div className="md-9 col">
				<div className="form-group">
					<input className="input-block"
						type="text" placeholder="Add your word"
						name="word" onChange={handleChange} value={string.word} />
				</div>

			</div>

			<div className="md-9 col">
				<div class="form-group">
					<textarea className="definition"
						id="large-input" placeholder="Definition"
						name="meaning" onChange={handleChange}
						value={string.meaning} />
				</div>
			</div>
			<div className="md-6 col">
				<button className="btn-block"
					type="submit" onClick={handleAdd}>Add</button>
			</div>
		</div>
	)
	
}
export default Add