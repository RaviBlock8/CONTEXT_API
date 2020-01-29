import React,{useState,createContext} from 'react'
import data from './data/data'

export const MovieContext=createContext()


export const MovieProvider=(props)=>{
    
    let [list,setList]=useState(data)
    console.log(`props:${props.children}`)
    return (
        
            <MovieContext.Provider value={[list,setList]}>
                {props.children}
            </MovieContext.Provider>
    
    )
}



