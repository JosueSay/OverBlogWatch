const useApiPost = () => {
    const getPost = async (postId) => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/posts/${postId}`);
        return await response.json();
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
  
    const getComments = async (postId) => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/posts/${postId}/comments`);
        return await response.json();
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    return { getPost, getComments };
  };
  
  export default useApiPost;
  