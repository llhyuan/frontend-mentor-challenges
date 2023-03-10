import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/logo.svg'

import { useState } from 'react'

import '../scss/_Nav.scss'

function Nav() {
  const [menuVisibility, setMenuVisibility] = useState(false)
  return (
    <div className='nav'>
      <div className='nav__mobile'>
        <img src={logo} alt='logo' />
        <FontAwesomeIcon
          className='menu-toggle'
          icon={faBars}
          onClick={() => setMenuVisibility(!menuVisibility)}
        />
      </div>
      <ul className={!menuVisibility && 'menu-hide'}>
        {menuVisibility && (
          <FontAwesomeIcon
            className='menu-toggle'
            icon={faXmark}
            onClick={() => setMenuVisibility(!menuVisibility)}
          />
        )}
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Popular</a>
        </li>
        <li>
          <a href='#'>Trending</a>
        </li>
        <li>
          <a href='#'>Categories</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
