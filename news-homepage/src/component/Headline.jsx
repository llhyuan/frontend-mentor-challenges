import headlinePhoto from '../assets/images/image-web-3-desktop.jpg'
import '../scss/Headline.module.scss'

function Headline() {
  return (
    <div>
      <div id='headline'>
        <img src={headlinePhoto} alt='headline story photo' />
        <article>
          <h1>The Bright Futrue of Web 3.0</h1>
          <section>
            <p>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <a className='button' href='#'>Read More</a>
          </section>
        </article>
      </div>
    </div>
  )
}

export default Headline
