import './App.css'
import './styles/fonts.css'
import './styles/colors.css'
import TopBar from './components/TopBar/TopBar'
import Publications from './components/Posts/Posts'
import Fonts from './components/view_styles/view_fonts'

function App () {
  return (
    <div>
      <TopBar />
      <Publications />
    </div>
  )
}

export default App
