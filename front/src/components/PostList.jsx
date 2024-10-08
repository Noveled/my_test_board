import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const PostList = ({postData}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 백엔드 API에서 데이터를 가져오는 함수
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/getBoard");
        const data = await response.json();
        setPosts(data); // 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h3>Post List</h3>
      <ul>
        {posts.map((post) => (
          // <Route path="/posts/:postId" element={<PostDetail />} />
          <Link to="/posts/:postId">
            <li key={post.id}>
              <span>{post.title}</span>
              <p>유저아이디 : {post.user_id}</p>
            </li>
          </Link>
          
        ))}
      </ul>
    </div>
  )
}

export default PostList