/*jshint esversion: 6 */
import React, { Component } from 'react'

import axios from 'axios'

export default class Movies extends Component {
  constructor(){
    super();
    this.state={
      hover:'',
      parr:[1],
      currPage:1,
      movies:[]
    }
  }

  async componentDidMount(){
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f1d294635498b00bb52064f79df58408&language=en-US&page=${this.state.currPage}`);
    let data= res.data;
  
    this.setState({
      movies:[...data.results]
    })

  }
 changeMovies=async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f1d294635498b00bb52064f79df58408&language=en-US&page=${this.state.currPage}`);
    let data= res.data;
 
    this.setState({
      movies:[...data.results]
    })
 
  }
  handleRight=()=>{
    let temparr=[]
    for (let i = 1; i <= this.state.parr.length+1; i++) { //+1 at i<=this.state.parr.length
      temparr.push(i);
    }
    this.setState({
      parr:[...temparr],
      currPage:this.state.currPage+1
    } , this.changeMovies)
  }
 handleLeft=()=>{
  if(this.state.currPage!=1){
    this.setState({
      currPage:this.state.currPage-1,
    },this.changeMovies)
  }

 }




  render() {
  
   
    return (
     <>
     {
      this.state.movies.length===0?

      <div className="spinner-border" role="status">
      <span className="sr-only"></span>
      </div> 
      :
      <div>
      <h3><strong>TRENDING</strong></h3>
      <div className='movies-list'>
        {
         
            this.state.movies.map((movieObj) =>(
            <div className="movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}    alt={this.state.movies.title} className="movies-img"/>
            <h5 className="card-title movies-title">{movieObj.original_title}</h5>
               <div className='button-wrapper' style={{display:'flex',width: '100%' ,justifyContent:'center' }}>
                {
                  this.state.hover==movieObj.id ?
                   <a  className="btn btn-primary movies-button" >Add to Favourites</a>
                   : null
                }
               
               </div>
            
                {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
            </div>       
                    ))
          
        }
      </div>
          <nav aria-label="Page navigation example" style={{display:'flex', justifyContent:'center'}}>
          <ul className="pagination">
          <li className="page-item"><a className="page-link" onClick={this.handleLeft}>Previous</a></li>
          {
            this.state.parr.map((value)=>(
                <li className="page-item"><a className="page-link" href="#">{value}</a></li>
            ))
          }
          <li className="page-item" onClick={this.handleRight}><a className="page-link" href="#">Next</a></li>
          </ul>
          </nav>
      </div>
     
  
    

    
     




     }
     </>
    )
  }
}
