import React,{useContext} from 'react'
import {MovieContext} from '../MovieContext'
function Nav() {
    const [list,setList]=useContext(MovieContext)
    return (
        <div id="nav">
            <h2>Ravi verma</h2>
            <h2>No. of Movies:{list.length}</h2>
        </div>
    )
}

export default Nav
