import '../scss/_Sidebar.scss'


function Sidebar() {
  return (
      <div className="sidebar">
        <h2>New</h2>
        <div className='article-container'>
          <article>
    <h3><a href='#'>Hydrogen VS Electric Cars</a></h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article>
    <h3><a href='#'>The Downsides of Al Artistry</a></h3>
            <p>What are the possible adverse effects</p>
          </article>
          <article>
    <h3><a href='#'>Is VC Funding Drying Up?</a></h3>
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
