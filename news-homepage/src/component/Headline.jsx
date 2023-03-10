import headlinePhoto from '../assets/images/image-web-3-desktop.jpg'
import headlinePhotoMobile from '../assets/images/image-web-3-mobile.jpg'
import '../scss/_Headline.scss'

function Headline() {
  return (
    <div className='headline'>
      <picture>
        <source
          srcset={headlinePhotoMobile}
          media='(max-width: 500px)'
        />
        <img src={headlinePhoto} alt='headline story photo' />
      </picture>
      <article>
        <h1>The Bright Futrue of Web 3.0</h1>
        <section>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a className='button' href='#'>
            Read More
          </a>
        </section>
      </article>
    </div>
  )
}

export default Headline
