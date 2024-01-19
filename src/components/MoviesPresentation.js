import React, {useContext} from 'react'
import {useState} from 'react'
import {Movies} from '../shared/ListOfMovies'
import {ThemeContext} from './ThemeContext.js'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'

export default function MoviesPresentation() {
  const [movie,setMovie] = useState([]);
  const {theme} = useContext(ThemeContext);

  return (
    <div className='background' style={{backgroundImage: theme.backgroundImage,transition: 'all 1s ease-in-out'}}>
  
    <div className='container'>
    {Movies.map((movie)=>(
    <div className='column'>
    <div className='card' style={{transition: theme.transition,background:theme.background}}>
    <img src={movie.img}/>
     <h3 className ='title' style={{transition: theme.transition,color: theme.color}}>{movie.name}</h3>

     <p className='genre' style={{transition: theme.transition,color: theme.color}}>{movie.genre}</p>
     <p className='showtime' style={{transition: theme.transition,color: theme.color}}>{movie.show}</p>
     <p className='direct'style={{transition: theme.transition,color: theme.color}}>{movie.direct}</p>
     
     <p><button onClick={()=> {setMovie(movie)}}>
        <a href='#popup1' className='openPopUp'>
        Movie Detail
        </a>
      </button></p>
     
      </div>
       </div>
      ))}

      <div id='popup1' className='overlay'>
        <div className='popup'style={{background: theme.background}}>
            <Link to={`Detail/${movie.id}`}> 
            <img src={movie.img}></img>
            </Link>
            <h2 className='name'>{movie.name}</h2>
            <a className ='close' href='#'style={{transition: theme.transition}}>X</a>
            <div className='info'>{movie.detail}</div>
        </div>
      </div>
    </div>
    </div>
)
}
