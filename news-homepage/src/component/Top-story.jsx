import '../scss/_top-story.scss'
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
  }
]

function Topstory({ img, number, title, content }) {
  return (
    <div className='top-story'>
      <img src={img} alt={title}/>
      <div className='abstract'>
        <h2>{number}</h2>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

function Topstories() {
  const articles = ARTICLES.map((article, index)=> <Topstory key={index} props={article} />);
  return (articles);
}
export default Topstories;
