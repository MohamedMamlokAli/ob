import React, { FC } from 'react'

const HowToMake: FC<{ content: string }> = ({ content }) => {
  return <p className="pr-1 text-base text-gray-600">{content}</p>
}

export default HowToMake
