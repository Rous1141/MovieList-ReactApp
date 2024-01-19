
import {ThemeContext} from './ThemeContext.js'
import React, {useContext} from 'react'

export default function Contacts(){
	const {theme} = useContext(ThemeContext);
		return (
			<div className='background' style={{backgroundImage: theme.backgroundImage,transition: 'all 1s ease-in-out'}}>
			<div className='contactPage'style={{transition: theme.transition,background:theme.background}}>
			<form className="form" style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}}>
				<p className="title">Paticipate In Our Newsletter!</p>
				<div>
				<lable for="email">Email: </lable>
				<input className="email" type="text" id="email" name="email" placeholder="Email..."></input>
				</div><div>
				<lable for="first">First Name:</lable>
				<input className="yourname" type="text" id="first" name="name" placeholder="First Name..."></input>
				<lable for="last">Last Name:</lable>
				<input className="yourname" type="text" id="last" name="name" placeholder="Last Name..."></input>
				</div><div>
				<lable for="address">Address:</lable>
				<input className="address" type="text" id="address" name="address" placeholder="Address..."></input>
				</div>
				<input className="submit" type="submit" value="Submit!"  style={{borderColor: theme.borderColor,color: theme.color,backgroundColor: theme.backgroundColor}}></input>
			</form>

			<div className='contactDetails'>
				<div style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}} className="box"><a href="https://discord.com/"target="_blank"><h4>BECOME A MEMBER</h4><img  className='link' src='./assets/Icons/joinTeam.jpg'></img></a></div>
				<div style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}} className="box"><a href="https://moriyashrine.org/"target="_blank"><h4>FORUM</h4><img className='link' src='./assets/Icons/moriya.png'></img></a></div>
				<div style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}} className="box"><a href="https://www.reddit.com/r/2hujerk/"target="_blank"><h4>REDDIT</h4><img className='link' src='./assets/Icons/jerk.png'></img></a></div>
				<div style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}} className="box"><a href="https://www.patreon.com/" target="_blank"><h4>SUPPORT US</h4><img className='link' src='./assets/Icons/donate.png'></img></a></div>
	    	</div>
			</div>	
			</div>
		)
	
}