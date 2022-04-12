import React from 'react'
import Card from './Card'
import CardsContainer from './CardsContainer'
import FilterContainer from './filter/FilterContainer'
import { Options } from '../../types'
interface PageProps {
  title: string
  options: Options[]
}
const PageContent: React.FC<PageProps> = ({ title, options }) => {
  return (
    <div className="mt-5 w-full md:flex md:items-center">
      {/* Filter menu */}
      <FilterContainer options={options} />
      <div className="w-full">
        <h1 className=" text-center uppercase ">{title}</h1>
        <div className="flex justify-end">
          <button className=" text-[#D0D0D0]">Filter</button>
        </div>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </div>
    </div>
  )
}

export default PageContent
