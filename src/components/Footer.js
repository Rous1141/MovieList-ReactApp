import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext.js'

export default function Footer({mode}){
	const { theme} = useContext(ThemeContext);
		return (
			<div class="footer" style={{transition: theme.transition, borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color }}>
				<footer>All Rights Reserved @By Annie-BHX</footer>
			</div>
		)
	
}