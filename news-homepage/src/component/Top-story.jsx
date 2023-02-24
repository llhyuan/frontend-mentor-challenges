import '../scss/_Top-story.scss'
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'
const ARTICLES = [
  {
    img: img1,
    number: '01',
    title: 'Reviving Retro PCs',
    content: 'What happens when old PCs are given modern upgrades?',
  },
  {
    img: img2,
    number: '02',
    title: 'Top 10 Laptops of 2022',
    content: 'Our best picks for various needs and budgets.',
  },
  {
    img: img3,
    number: '03',
    title: 'The Growth of Gaming',
    content: 'How the pandemic has sparked fresh opportunities.',
  },
]

function Topstory({ article }) {
  return (
    <div className='top-story'>
        <img src={article.img} alt={article.title} />
      <div className='abstract'>
        <h3>{article.number}</h3>
        <h4>{article.title}</h4>
        <p>{article.content}</p>
      </div>
    </div>
  )
}

function Topstories() {
  const articles = ARTICLES.map((article, index) => (
    <Topstory key={index} article={article} />
  ))
  return <div className='top-stories'>{articles}</div>
}
export default Topstories
