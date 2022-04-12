import React from 'react'

const FilterOptions: React.FC<{
  indexOfElements: number
  filters: string[]
}> = ({ indexOfElements, filters }) => {
  return (
    <div
      className={`${
        indexOfElements === 0 && 'border-b border-black'
      } w-2/4 space-y-5 pb-2 `}
    >
      {filters.map((filter, index) => (
        <span className="block" key={index}>
          {filter}
        </span>
      ))}
    </div>
  )
}

export default FilterOptions
