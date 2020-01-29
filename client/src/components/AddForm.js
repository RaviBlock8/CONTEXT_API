import React,{useState,useContext} from 'react'
import {MovieContext} from '../MovieContext'

export default function AddForm() {
    const [list,setList]=useContext(MovieContext)
    let [name,setName]=useState('')
    let [price,setPrice]=useState('')
    let [id,setId]=useState(list.length+1)
    let onChangeN=(e)=>{
        setName(e.target.value)
    }
    let onChangeP=(e)=>{
        setPrice(e.target.value)
    }
    let onSubmit=(e)=>{
        e.preventDefault()
        console.log(`name:${name} price:${price} id:${id}`)
        setList([...list,{id:id,name:name,price:price}])
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Movie name:</label>
                    <input type="text" name="name" onChange={onChangeN}></input>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" onChange={onChangeP}></input>
                </div>
                <button type="submit">Submit</button>

            </form>
            
        </div>
    )
}
