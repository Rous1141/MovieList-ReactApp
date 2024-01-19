
import { useParams } from 'react-router-dom'
import { Movies } from '../shared/ListOfMovies'
import {ThemeContext} from './ThemeContext.js'
import React, {useContext,useState} from 'react'
import ModalCase from './ModalCase';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';


export default function Details(){
	const {theme} = useContext(ThemeContext);
	const [isOpen, setIsOpen] = useState(false);
	const movie = useParams();
	const movieInfo = Movies.find(obj => {
	    return obj.id == movie.id;
	  });
	   let rate = movieInfo.rate.toLocaleString();
	   return(

	   	<div className='background' style={{backgroundImage: theme.backgroundImage,transition: 'all 1s ease-in-out'}}>
		{isOpen && <ModalCase setIsOpen={setIsOpen} movie={movieInfo}/>}
	    <div className='head'style={{transition: theme.transition,background:theme.background}}>
	     <div className='product-card'>
	    	<div className='product-details'>
	    		<div className='name'>{movieInfo.name}</div>
		    	<a onClick={() => setIsOpen(true)} className="openVid">
	                  <p>Watch The Trailer!</p><OndemandVideoIcon className="watchIcon"></OndemandVideoIcon> 
	 			</a>
	        	<h4>{movieInfo.genre}</h4>
	        	<h4>{movieInfo.show}</h4>
	        	<h4>{movieInfo.direct}</h4>
	      		<div className='product-price'>{rate}</div>
	      		<div className='product-bottom-details'><p>Descrisption: {movieInfo.detail}</p></div>
	    	</div>
	  	</div>
	  	<div className='product-thumb'>
	    		<img src={`../${movieInfo.img}`} alt=''/>
	    </div>
	</div>
	</div>
	   )
}