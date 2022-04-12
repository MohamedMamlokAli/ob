import React from 'react'
import { Options } from '../../../types'
import FilterOptions from './FilterOptions'
import Title from './Title'

const FilterContainer: React.FC<{ options: Options[] }> = ({ options }) => {
  return (
    <div className="hidden w-1/3  md:block">
      <div id="filters">
        {options.map((option, index) => {
          return (
            <div key={index}>
              <Title title={option.title} />
              <FilterOptions filters={option.filters} indexOfElements={index} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterContainer
