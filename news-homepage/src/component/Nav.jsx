import logo from '../assets/images/logo.svg'
import '../scss/Nav.module.scss'

function Header() {
  return (
    <div>
      <div id='header'>
        <img src={logo} alt='logo' />
        <ul id='nav'>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
