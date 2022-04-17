import React, { useState } from 'react'
import { urlFor } from '../../lib/sanity'
import Link from 'next/link'
import Card from './Card'
import CardsContainer from './CardsContainer'
import FilterContainer from './filter/FilterContainer'
import { useDispatch } from 'react-redux'
import { Options } from '../../types'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
interface PageProps {
  title: string
  options: Options[]
  filterState: boolean
  filterToggler: ActionCreatorWithoutPayload<string>
  data: any
}
const PageContent: React.FC<PageProps> = ({
  title,
  options,
  filterState,
  filterToggler,
  data,
}) => {
  const dispatch = useDispatch()
  // data.map((recipe) => console.log(recipe.slug))
  return (
    <div className=" mt-5 w-full md:flex md:items-center">
      {/* Filter menu */}
      <FilterContainer options={options} filterState={filterState} />
      <div className="w-full">
        <h1 className=" text-center uppercase ">{title}</h1>
        <div className="flex justify-end">
          <button
            className=" text-[#D0D0D0]"
            onClick={() => dispatch(filterToggler())}
          >
            Filter
          </button>
        </div>
        <CardsContainer>
          {data.map((recipe: any, index: any) => (
            <Link href={`/blog/${recipe.slug.current}`} key={index}>
              <a>
                <Card
                  title={recipe.recipeName}
                  image={urlFor(recipe.imageReference).url()}
                />
              </a>
            </Link>
          ))}
          {data.map((recipe: any, index: any) => (
            <Card
              title={recipe.recipeName}
              image={urlFor(recipe.imageReference).url()}
              key={index}
            />
          ))}
        </CardsContainer>
      </div>
    </div>
  )
}

export default PageContent
