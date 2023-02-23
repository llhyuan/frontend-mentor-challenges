import '../scss/_Sidebar.scss'


function Sidebar() {
  return (
      <div className="sidebar">
        <h2>New</h2>
        <div className='article-container'>
          <article>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article>
            <h3>The Downsides of Al Artistry</h3>
            <p>What are the possible adverse effects</p>
          </article>
          <article>
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means
            </p>
          </article>
        </div>
      </div>
  )
}

export default Sidebar;
