import React from 'react'

const Title: React.FC<{ title: string }> = ({ title }) => {
  return <h4 className="my-3 text-lg text-[#D0D0D0]">{title}</h4>
}

export default Title
