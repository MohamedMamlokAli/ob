import React from 'react'
import { Options } from '../../../types'
import FilterOptions from './FilterOptions'
import Title from './Title'

const FilterContainer: React.FC<{
  options: Options[]
  filterState: boolean
}> = ({ options, filterState }) => {
  return (
    <div className={`hidden md:block md:w-1/3`}>
      <div id="filters">
        {options.map((option, index) => {
          return (
            <div key={index}>
              <Title title={option.header} />
              <FilterOptions filters={option.options} indexOfElements={index} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterContainer
