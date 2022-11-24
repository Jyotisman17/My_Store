import React from 'react'
import {Link}  from "react-router-dom"
import "../styles/HotAccessoriesMenu.css"


const HotAccessoriesMenu = () => {
    return (
        <div className='HotAccessoriesMenu'>
            <Link className='HotAccessoriesLink' to="/mobileStore"> Mobile Store </Link>            
            <Link className='HotAccessoriesLink' to="/TV"> TV </Link>
            <Link className='HotAccessoriesLink' to="/mobileAccessories"> Mobile Accessories </Link>
            <Link className='HotAccessoriesLink' to="/lifestyle"> Life Style </Link>
            <Link className='HotAccessoriesLink' to="/smartHome"> Smart Home </Link>
        </div>
    )
}

export default HotAccessoriesMenu