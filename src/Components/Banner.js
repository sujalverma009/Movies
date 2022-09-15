import React, { Component } from 'react'
import {movies} from './getMovies'
export default class Banner extends Component {
  render() {
    let movie=movies.results[1]
    return (
    <React.Fragment>
     {
      movie=== ''?

      <div className="spinner-border" role="status">
      <span className="sr-only"></span>
      </div> 
      :      
     <div className="card banner-card">
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
     <h5 className="card-title banner-title">{movie.original_title}</h5>
     <p className="card-text banner-text">{movie.overview}</p>
    
     </div>
     
    }
   </React.Fragment>
    
    )
  }
}
