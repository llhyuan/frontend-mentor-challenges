import Nav from './component/Nav'
import Headline from './component/Headline'
import Sidebar from './component/Sidebar'
import './scss/_app.scss'
import Topstories from './component/Top-story'

function App() {
  return (
    <div className='app-container'>
      <Nav />
      <div className='header'>
        <Headline />
        <Sidebar />
      </div>
    <Topstories/>
    </div>
  )
}

export default App
