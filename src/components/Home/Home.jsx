import './Home.css'
import TopBar from '../TopBar/TopBar'
import Posts from '../Posts/Posts'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='topbar-container'>
        <TopBar />
      </div>
      <div className='posts-container'>
        <Posts />
      </div>
    </div>
  )
}

export default Home
