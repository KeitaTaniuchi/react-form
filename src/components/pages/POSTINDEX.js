import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostIndex() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  });

  return (
    <ul>
      {posts.map((post) => (
        <li kye={post.id}>
          <Link to={`${post.id}`}>
            {post.id}:{post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostIndex;
