import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import searchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=9ba1a44c'
function App() {

  const [movies,setMovies] =useState([]);
  const [search,setSearch] =useState('');


  const searchMovies =async(title)=>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  }

  useEffect(()=>{
    searchMovies('spiderman');
  },[])
  // console.log(movies.length);

// const movie1={
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='search for movies'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <img 
          src={searchIcon} 
          alt='search'
          onClick={()=>searchMovies(search)}/>
      </div>

      {
        movies?.length >0 
          ?(
            <div className='container'>
              {/* <MovieCard movie={movies[0]}/> */}
              {
                movies.map((movie , id)=>(
                  <MovieCard movie={movie} key={id}/>
                ))
              }
            </div>
          ):
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
