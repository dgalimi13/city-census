import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return (
      
        <div className="Nav">
            <Link to='/cities' style={{paddingRight: '10px'}}>All Cities  </Link>
            <Link to='/cities/new'> Add City</Link>
        </div>
  
    )
  }


export default NavBar