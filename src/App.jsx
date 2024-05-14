import './App.css'
import './styles/fonts.css'
import './styles/colors.css'
import Post from './components/Posts/Post'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className=''>
      <Router>
        <Routes>
        <Route path='/OverBlogWatch' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/post/:postId' element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
