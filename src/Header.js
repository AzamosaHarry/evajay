import { React, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import evajaywhite from './evajaywhite.png'
import evajayblack from './evajayblack.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { HashLink, NavHashLink } from "react-router-hash-link";


function Header() {
    const [menu, setMenu] = useState(false)

    return (
      <div className='header transparent'>      
        <Link to='/'><img src={evajayblack} alt='' className='evajay_header' /></Link>
        <ul className='header_nav'>
          <li>
            <Link to='/product' className='header_nav_list'>Product</Link>
          </li>
          <li>         
            <Link to='/about' className='header_nav_list'>About us</Link>
          </li>
          <li>
            <Link to='/sustainability' className='header_nav_list'>Sustainability</Link></li>
            <li><NavHashLink
              to="/#with-hash-contact"
              className='header_nav_list'
              >Contact us</NavHashLink></li>
            
        </ul>

        <FiMenu className='home_menu' onClick={() => {setMenu(true)}}/>
        <div className={menu? 'home_sidebar_true' : 'home_sidebar'}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Link to='/'><img src={evajaywhite} alt='' className='evajay_header2' /></Link>
              <AiOutlineClose className='home_sidebar_close' onClick={() => {setMenu(false)}}/>
            </div>
            <ul className='home_sidebar_navbar'>
              <li><Link
                to='/product'
                className='home_sidebar_link'
                >Products</Link></li>
              <li><Link
                  to="/about"
                  className='home_sidebar_link'
                  >About us</Link></li>
              <li><Link
                to="/sustainability"
                className='home_sidebar_link'
                >Sustainability</Link></li>  
              <li><Link
                to='/'
                className='home_sidebar_link'
                >Contact us</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Header