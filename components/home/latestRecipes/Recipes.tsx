import React from 'react'

const Recipes: React.FC = ({ children }) => {
  return (
    <div className="space-y-4">
      <div className="mt-7 grid min-h-max grid-cols-1   gap-y-4 md:grid-cols-2 md:gap-x-4 xl:grid-cols-4">
        {children}
      </div>
      <div className="flex justify-center">
        {/* Button but will be changed into a Link later */}
        <button className="rounded-sm bg-gray-100 py-2 px-4 text-lg uppercase text-[#7DAC5C] shadow-lg">
          Read more Recipes
        </button>
      </div>
    </div>
  )
}

export default Recipes
