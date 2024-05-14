import { useState, useEffect } from 'react';
import './Post.css';
import { useParams } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import useApiPost from '../../hooks/useApiPost'

const Post = () => {
  const { postId } = useParams();
  const { getPost, getComments } = useApiPost(); // Usa la función

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPost(postId);
      const commentsData = await getComments(postId);

      setPost(postData);
      setComments(commentsData);
    };

    fetchData();
  }, [postId, getPost, getComments]);

  return (
    <div className='post-container-single'>
      <div className='topbar-container'>
        <TopBar />
      </div>
      <div className='post-container'>
        {post && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
        <h3>Comments:</h3>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Post;
