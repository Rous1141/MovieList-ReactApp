import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext.js'
import { Link } from 'react-router-dom'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FeedIcon from '@mui/icons-material/Feed';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
export default function Navigation(){
const { theme, toggle, dark } = useContext(ThemeContext);

		return (
			<div>
			<nav className="navigate" style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}}>
					
						
						<ul>
						<img className='icon' src='./assets/Posters/popcorn.png' style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}}></img>
								<li>
									   
	                                   <a className='linkText' href='#' onClick={toggle}
	                                   style={{transition: theme.transition,
	                                          color: theme.color,
	                                          outline: 'none'
	                                   }} data-testid="toggle-theme-btn">
	                                   Switch To {!dark ? 'Dark' : 'Light'} Mode
	                                   <LightbulbIcon className="navIcon"></LightbulbIcon>
	                                  </a>
	                            </li>
	                            <li><Link to={``} className='linkText'  style={{ transition: theme.transition, color: theme.color }}>Home Page<HomeIcon className="navIcon" sx={{fontSize: '25px'}}></HomeIcon></Link></li>
								<li><Link className='linkText' to={`News`} style={{ transition: theme.transition, color: theme.color }}>Movies News<FeedIcon className="navIcon"></FeedIcon></Link></li>
								<li><Link className='linkText' to={`Contact`} style={{ transition: theme.transition, color: theme.color }}>Contact Us<ContactsIcon className="navIcon"></ContactsIcon></Link></li>
								
						</ul>
						<p className ='webname' style={{color: theme.color,transition: theme.transition}}>ANNIE'S WATCH LIST</p>
					</nav>	
			</div>
		)
}