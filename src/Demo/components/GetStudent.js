import React,{useState,useEffect} from 'react'
import axios from 'axios'
const GetPost = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', views: '' });
  useEffect(() => {
    axios.get('http://localhost:3001/student')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log("Error fetching posts:", error);
      });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const addPost = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/posts', newPost)
      .then(response => {
        setPosts(prevPosts => [...prevPosts, response.data]);
        setNewPost({ title: '', views: '' }); 
      })
      .catch(error => {
        console.log("Error adding post:", error);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Add New Post</h3>
      <form onSubmit={addPost}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={newPost.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="views"
          placeholder="Enter views"
          value={newPost.views}
          onChange={handleChange}
        />
        <button type="submit">Add Post</button>
      </form>
      <h2>All Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.views} views
          </li>
        ))}
      </ul>

    </div>
  );
}

export default GetPost