import './App.css'
import './styles/fonts.css'
import './styles/colors.css'
import TopBar from './components/TopBar/TopBar'
import Posts from './components/Posts/Posts'
import Fonts from './components/view_styles/view_fonts'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className=''>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
