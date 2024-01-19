import React, { Component } from 'react'
import {Movies} from '../shared/ListOfMovies'
import PlayerPresentation from './PlayerPresentation';
export class Main extends Component {
constructor() {
	super();
	this.state = 
	{
		movies:Movies
	};
}
	render() 
	{
		return <PlayerPresentation players = {this.state.players}/>
	}
}
export default Main;
