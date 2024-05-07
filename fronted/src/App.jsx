import './App.css'
import './styles/fonts.css'
import './styles/colors.css'
import ViewFonts from './components/view_styles/view_fonts'
import SearchBar from './components/SearchBar/SearchBar'
function App () {
  return (
    <div>
      <h1>Visualizando fuentes</h1>
      <ViewFonts />
      <SearchBar />
    </div>
  )
}

export default App
