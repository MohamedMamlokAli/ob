import React from 'react'
interface PostData {
  title: string
  description: string
}
const Post: React.FC<PostData> = ({ title, description }) => {
  return (
    <div className="h-96  w-full ">
      <div className="aspect-auto h-[45%] overflow-hidden rounded-md">
        <img
          src="/Organic_Final_v1.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between text-gray-600">
        <time>5/4/2022</time> <div>367 views</div>
      </div>
      <div className="flex h-2/5 flex-col justify-between">
        <h3 className="flex-1 text-lg font-medium">{title}</h3>
        <p className=" flex-[2] ">{description.substring(0, 100)}...</p>
        <button className="w-1/2 place-self-start rounded-sm bg-[#7DAC5C] py-2 text-gray-200 shadow-lg">
          Read more
        </button>
      </div>
    </div>
  )
}

export default Post
