import React from 'react'

const InnerLayout: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto space-y-24 border-b border-black pb-12 ">
      {children}
    </div>
  )
}

export default InnerLayout
