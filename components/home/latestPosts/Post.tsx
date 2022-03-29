import React from 'react'

const Post = () => {
  return (
    <div className="w-full border border-yellow-300">
      <div className="aspect-video">
        <img
          src="/homeImage.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between">
        <div>date</div>
        <div>views</div>
      </div>
      <div>
        <h3>title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          officiis sed accusamus necessitatibus nobis eos ea, perspiciatis illum
          eveniet reiciendis!
        </p>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default Post
