import React from 'react'
interface Current {
  page: string
  article?: string
}
const CurrentPage: React.FC<Current> = ({ page, article }) => {
  return (
    <h3 className="uppercase text-gray-700">
      organic bomb / {page}{' '}
      <span className=" font-medium text-black">
        {article && `/ ${article}`}
      </span>
    </h3>
  )
}

export default CurrentPage
