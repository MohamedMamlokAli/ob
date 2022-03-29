import React from 'react'
import Post from './Post'
import Posts from './Posts'

const Latest = () => {
  return (
    <section id="latestPosts" className="py-3 px-5">
      <h2 className="text-center text-xl">Latest Posts</h2>
      <Posts>
        <Post />
        <Post />
        <Post />
      </Posts>
    </section>
  )
}

export default Latest
