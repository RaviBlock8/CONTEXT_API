import React,{useState} from 'react'
import data from './../data/data'
import Movie from './Movie'

function MovieList() {

    let [list,setList]=useState(data)
    let displayMovies=()=>{
        return(
            list.map((movie)=>{
                return <Movie movie={movie}></Movie>
            })
        )
    }
    return (
        <div>
            {displayMovies()}
            
        </div>
    )
}

export default MovieList
