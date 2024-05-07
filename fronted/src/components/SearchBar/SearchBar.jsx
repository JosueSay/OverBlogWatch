import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'; 
import '../ButtonIcon/ButtonIcon'

const SearchBar = ({ onChange }) => {
  return (
    <div className="input-icon">
      <input
        type="text"
        placeholder="🔍 Buscar en OverBlogWatch"
        onChange={onChange}
      />
      <FontAwesomeIcon className='icon' icon={faSearch} />
    </div>
  )
}

export default SearchBar
