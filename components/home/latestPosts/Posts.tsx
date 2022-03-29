import React from 'react'

const Posts: React.FC = ({ children }) => {
  return (
    <div className="mt-7 grid grid-cols-1 justify-items-center gap-y-4 border border-red-800">
      Posts {children}
    </div>
  )
}

export default Posts
