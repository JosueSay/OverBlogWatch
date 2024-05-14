import './Post.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import useApiPost from '../../hooks/useApiPost';

const Post = () => {
  const { postId } = useParams();
  const { getPost, getComments } = useApiPost();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPost(postId);
      const commentsData = await getComments(postId);

      setPost(postData);
      setComments(commentsData);
    };

    fetchData();
  }, [postId, getPost, getComments]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handlePostTitleClick = (postId) => {
    console.log('ID del post:', postId);
    navigate(`/post/${postId}`);
  };

  const handleUserNameClick = (userId) => {
    console.log('ID del usuario:', userId);
  };

  const handleUserCommentClick = (commentUserId) => {
    console.log('ID del comentador:', commentUserId);
  };

  return (
    <div className='posts-container'>
      <div className='topbar-container'>
        <TopBar />
      </div>

      {post && (
        <div className='post-container'>
          <h2 className="post-title" onClick={() => handlePostTitleClick(post.Id_post)}>{post.Titulo}</h2>
          <p className="post-info">
            Creado por <span className="username" onClick={() => handleUserNameClick(post.Id_usuario)}>{post.NombreUsuario}</span> el {formatDate(post.Fecha)}
          </p>
          <p className="post-content">{post.Contenido}</p>
          {post.Imagen.startsWith('data:image/png;base64') ? (
            <img src={post.Imagen} alt="Imagen adjunta" className="post-image" />
          ) : (
            <img src={`data:image/png;base64,${post.Imagen}`} alt="Imagen adjunta" className="post-image" />
          )}
          <div className="stats">
            <p className="likes-stats"><FontAwesomeIcon icon={faHeart} /> {post.Cantidad_likes}</p>
            <p className="comment-stats"><FontAwesomeIcon icon={faComment} /> {post.Cantidad_comentarios}</p>
          </div>


          {comments && comments.length > 0 ? (
            <div className="comment">
              <p><FontAwesomeIcon icon={faComment} /> Comentarios</p>
              {comments.map(comment => (
                <div className="comment">
                  <p><span className="comentador" onClick={() => handleUserCommentClick(comment.Id_Usuario)}>{comment.Nombre_Usuario}</span></p>
                  <p>{comment.Contenido}</p>
                  <p className="comment-details"><FontAwesomeIcon icon={faHeart} /> {comment.Likes} Likes {formatDate(comment.Fecha)}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="comment">
              <p className="comment-error">Sin comentarios aún</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
