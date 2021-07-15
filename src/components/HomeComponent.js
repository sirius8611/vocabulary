import React from 'react'
import depressPic from '../assets/depress.png'
import emptyPic from '../assets/empty.jpg'
import './componentcss/main.css'
function Home(){
	return(
			<div className="row">
			<div className="col-12 col">
				<img src={depressPic} alt="depression with Words" className="float-right"/>
				<img src={emptyPic} alt="depression with Words" className="float-right"/>

				<p>Tired of the SAT or IELTS? Turn out, what messing your head are the vocabs?</p>
				 <strong>DON'T WORRY !</strong><br/>
				<strong>YOU GOT VOCABULARY TRACKER!!!!!</strong>
				<p>A tool for you to keep track of your vocabulary. Learn by heart and by Vocabulary Tracker</p>
				<p>Made by __Sirius8611__</p>
			</div>
			</div>
	)
}
export default Home