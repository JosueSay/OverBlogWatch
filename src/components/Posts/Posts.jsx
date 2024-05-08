import React, { useState, useEffect } from 'react';
import './Post.css'; // Importa el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/posts/${postId}/most-popular-comment`);
      if (response.status === 404) {
        return { errorMessage: "Sin comentarios aún" };
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    const fetchAllComments = async () => {
      const postsWithComments = await Promise.all(
        posts.map(async (post) => {
          const comment = await fetchComments(post.Id_post);
          return { ...post, comment };
        })
      );
      setPosts(postsWithComments);
    };
    fetchAllComments();
  }, [posts]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.Id_post} className="post-container">
          <h2 className="post-title">{post.Titulo}</h2>
          <p className="post-info">
          Creado por <span className="username">{post.NombreUsuario}</span> el {formatDate(post.Fecha)}
        </p>

          <p className="post-content">{post.Contenido}</p>
          {post.Imagen.startsWith('data:image/png;base64') ? (
            <img src={post.Imagen} alt="Imagen adjunta" className="post-image" />
          ) : (
            <img src={`data:image/png;base64,${post.Imagen}`} alt="Imagen adjunta" className="post-image" />
          )}
          {post.comment && !post.comment.errorMessage && (
            <div className="comment">
              <p><FontAwesomeIcon icon={faComment} /> Comentarios</p>
              <p><span className="comentador">{post.comment.Usuario}</span></p>
              <p>{post.comment.Comentario}</p>
              <p className="comment-details"><FontAwesomeIcon icon={faHeart} /> {post.comment.Likes_Comentario} Likes {formatDate(post.comment.Fecha_Comentario)}</p>
            </div>
          )}
          {(!post.comment || post.comment.errorMessage) && (
            <div className="comment">
              <p className="comment-error">{post.comment ? post.comment.errorMessage : "Sin comentarios aún"}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
