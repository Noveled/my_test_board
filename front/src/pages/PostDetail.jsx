import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  console.log('postId:', postId);
  console.log('post:', post);

  useEffect(() => {
    // 예시: API를 통해 postId에 해당하는 게시물 데이터를 가져옴
    fetch(`http://localhost:8080/getBoardDetail/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post:', error));
  }, [postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post[0].title}</h1>
      <p>{post[0].content}</p>
    </div>
  );
}

export default PostDetail