import React from 'react'

const CardsContainer: React.FC = ({ children }) => {
  return (
    <div className="space-y-4">
      <div className="mt-7 grid min-h-max grid-cols-1   gap-y-4 md:grid-cols-2 md:gap-x-4 xl:grid-cols-3">
        {children}
      </div>
    </div>
  )
}

export default CardsContainer
