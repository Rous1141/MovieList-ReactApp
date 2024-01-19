import React from 'react'
import {ThemeContext} from './ThemeContext.js'
import {useContext} from 'react'
import {useState} from 'react'

export default function ModalCase({setIsOpen,movie} ) {
	  const {theme} = useContext(ThemeContext);
	return (
		<div className= 'modal-show' onClick={() => setIsOpen(false)}>
		<div id="modal1" className="modal" style={{display: 'block', top: '10%'}}> 
		<div className="modal-content" style={{ borderColor: theme.borderColor,transition: theme.transition,backgroundColor:theme.backgroundColor}}>
		<h4 style={{transition: theme.transition,color: theme.color}}>Trailer for: {movie.name}</h4>
		<p><iframe width="100%" height="500px" src={movie.clip} title={movie.name} frameborder="g" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/></p>
		</div>
		<div className="modal-footer">
		<a className="modal-close red-text">Close</a>
		</div>
		</div>
		</div>

)
}