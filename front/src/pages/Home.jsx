import React from 'react'
import PostList from '../components/PostList'

const Home = () => {
  return (
    <div>
      {/* 상단 헤더 영역 */}
      <div>Header</div>

      {/* 컨텐츠 영역 */}
      <article>
        <PostList />
      </article>

      {/* 푸터 영역 */}
      <footer>Noveled의 DemoBoard @All rights reserved.</footer>
    </div>
  )
}

export default Home