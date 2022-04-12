import React from 'react'

const Card = () => {
  return (
    <div className="">
      {/* Card Image { will be passed through props later } */}
      <div className="  w-full ">
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
        <div className="my-1">
          <span className="my-2 rounded-full bg-gray-300 px-2">meat</span>
        </div>
        <div className="flex h-2/5 flex-col justify-between">
          <h3 className="flex-1 text-lg font-medium">What is Organic Foods?</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
