import './Image.css'

const ImageComponent = ({ src, alt, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="image-container" onClick={handleClick}>
      <img 
        src={src} 
        alt={alt} 
        className="image" 
      />
    </div>
  )
}

export default ImageComponent
