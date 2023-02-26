import React from 'react'
import "../styles/Nav.css"
import {Link} from "react-router-dom"

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>


const NavBar = () => {
    return (
        <div class="nav">
            <div className="logo">
                <Link to="/dsd">
                    <img id='logoImage' src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="not"  />
                </Link>
            </div>

                <a href="https://www.mi.com/in/phone#xiaomi" className="navlinks"> Xiaomi Phones</a>
                <a href="https://www.mi.com/in/list" className="navlinks">Redmi Phones</a>
                <a href="https://www.mi.com/in/smart-home#tv" className="navlinks">TV</a>
                <a href="https://www.mi.com/in/product-list/laptops" className="navlinks">Laptops</a> 
                <a href="https://www.mi.com/in/life-style/?utm_source=google&utm_medium=cpc&utm_campaign=%5BA_BR%5BSEM_B%5BXiaomiBRAND_S%5D20190102%5D&gclid=Cj0KCQiAgOefBhDgARIsAMhqXA6X6Amjq-ykj_H-fmZzPFVjq-rQYyMBar0KZoUYu5ymqHVq6Zd9y4waAjMzEALw_wcB" className="navlinks">Accessories</a>
                
                <a href="https://www.mi.com/in/product-list/audio" className="navlinks">Audio</a>

                <div className='searchbox'>
                    <input type="text" name='search' placeholder='search Products' />
                    {searchIcon}
                </div>
            

        </div>
    ) 
}

export default NavBar