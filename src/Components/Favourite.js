import React, { Component } from 'react'
import { movies } from './getMovies';

export default class Favourite extends Component {
  render() {
     let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    const movie=movies.results;
    console.log(movie)
    return (
      <div className='main'>Hello
      <div className='row'>
        <div className='col-3'>
            <ul class="list-group favourites-genres">
                <li class="list-group-item">All Genres</li>
                <li class="list-group-item">Action</li>
                <li class="list-group-item">Action</li>
                <li class="list-group-item">Action</li>
                <li class="list-group-item">Action</li>
                </ul>
        </div>
        <div className='col-9 favourites-table'>
        <div className="row">
            <input type="text" className="input-group-text col" />
            <input type="text" className="input-group-text col" />
            </div>
            <div className="row">
            {/* /* <table table class = " favourites-table" > table table-dark */}
             <table table class = "table table-striped favourites-table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Popularity</th>
                <th scope="col">Rating</th>

                </tr>
                {/* <tr><hr style={{size:'10', margin:'0', display:'block'}} /></tr> */}
            </thead>
            <tbody>     
                {
                    movie.map((movieObj)=>(
                        <tr>
                            <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} style={{width:'5rem'}} /> &nbsp;
                                {movieObj.original_title}
                            </td>
                            <td>
                            
                              {genreids[movieObj.genre_ids[1]]}
                            </td> 
                            <td>{movieObj.popularity}</td>
                            <td>{movieObj.vote_average}</td>
                            <td><button type="button" class="btn btn-danger">Danger</button></td>
                        </tr>

                    ))
                } 
          
            </tbody>
            </table>
          </div>
            <nav aria-label="Page navigation example">
            <ul ul class = "pagination" style={{display: 'flex'}}>
               
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
              
            </ul>
            </nav>
        </div>
        
 
        
      </div>
      
      
      
      </div>
    )
  }
}
