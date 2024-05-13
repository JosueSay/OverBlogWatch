import './Post.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error))
  }, [])

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/posts/${postId}/most-popular-comment`)
      if (response.status === 404) {
        return { errorMessage: 'Sin comentarios aún' }
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  useEffect(() => {
    const fetchCommentsForPost = async (postId) => {
      const comment = await fetchComments(postId)
      setPosts(prevPosts => {
        return prevPosts.map(post => {
          if (post.Id_post === postId) {
            return { ...post, comment }
          }
          return post
        })
      })
    }

    posts.forEach(post => {
      if (post.Cantidad_comentarios > 0 && !post.comment) {
        fetchCommentsForPost(post.Id_post)
      }
    })
  }, [posts])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const handlePostTitleClick = (postId) => {
    console.log('ID del post:', postId)
  }

  const handleUserNameClick = (userId) => {
    console.log('ID del usuario:', userId)
  }

  const handleUserCommentClick = (commentUserId) => {
    console.log ('ID del comentador:', commentUserId)
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.Id_post} className="post-container">
          <h2 className="post-title" onClick={() => handlePostTitleClick(post.Id_post)}>{post.Titulo}</h2>
          <p className="post-info">
            Creado por <span className="username" onClick={() => handleUserNameClick(post.Id_usuario)}>{post.NombreUsuario}</span> el {formatDate(post.Fecha)}
          </p>
          <p className="post-content">{post.Contenido}</p>
          {post.Imagen.startsWith('data:image/png;base64')
            ? (
              <img src={post.Imagen} alt="Imagen adjunta" className="post-image" />
              )
            : (
              <img src={`data:image/png;base64,${post.Imagen}`} alt="Imagen adjunta" className="post-image" />
              )}
          <div className="stats">
            <p className="likes-stats"><FontAwesomeIcon icon={faHeart} /> {post.Cantidad_likes}</p>
            <p className="comment-stats"><FontAwesomeIcon icon={faComment} /> {post.Cantidad_comentarios}</p>
          </div>
          {post.comment && !post.comment.errorMessage && (
            <div className="comment">
              <p><FontAwesomeIcon icon={faComment} /> Comentarios</p>
              <p><span className="comentador" onClick={() => handleUserCommentClick(post.comment.Comennted_Id)}>{post.comment.Usuario}</span></p>
              <p>{post.comment.Comentario}</p>
              <p className="comment-details"><FontAwesomeIcon icon={faHeart} /> {post.comment.Likes_Comentario} Likes {formatDate(post.comment.Fecha_Comentario)}</p>
            </div>
          )}
          {(!post.comment || post.comment.errorMessage) && (
            <div className="comment">
              <p className="comment-error">{post.comment ? post.comment.errorMessage : 'Sin comentarios aún'}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Posts
