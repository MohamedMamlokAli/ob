import React from 'react'

const InnerLayout: React.FC = ({ children }) => {
  return <div className="container mx-auto space-y-24 pb-12 ">{children}</div>
}

export default InnerLayout
