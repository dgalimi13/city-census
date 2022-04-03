import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return (
      
        <div>
            <Link to='/cities' style={{paddingRight: '10px'}}>Cities  </Link>
            <Link to='/cities/new'> City</Link>
        </div>
  
    )
  }


export default NavBar