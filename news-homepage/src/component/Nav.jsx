import logo from '../assets/images/logo.svg'
import '../scss/_Nav.scss'

function Nav() {
  return (
      <div className='nav'>
        <img src={logo} alt='logo' />
        <ul id='nav'>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
      </div>
  )
}

export default Nav
