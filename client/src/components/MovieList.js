import React,{useState,useContext} from 'react'
import data from './../data/data'
import Movie from './Movie'
import {MovieContext} from '../MovieContext'

function MovieList() {

    let [list,setList]=useContext(MovieContext)
    let displayMovies=()=>{
        return(
            list.map((movie)=>{
                return <Movie key={movie.id} movie={movie}></Movie>
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
