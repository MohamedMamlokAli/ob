import React from 'react'
import { sanityClient } from '../lib/sanity-server.js'
import { groq } from 'next-sanity'

import CurrentPage from '../components/common/CurrentPage'
import PageContent from '../components/common/PageContent'
import Footer from '../components/home/Footer'
import { useSelector } from 'react-redux'
import {
  selectRecipeFilter,
  toggleRecipeFilter,
} from '../store/filter/filterSlice'
import { urlFor } from '../lib/sanity.js'
const allRecipesQuery = groq`*[_type=='recipe'][]{recipeName,imageReference,howToMake,slug}`
export const getStaticProps = async () => {
  const data = await sanityClient.fetch(allRecipesQuery)
  return {
    props: {
      data,
    },
  }
}
const recipes = ({ data }: any) => {
  console.log(data[0].slug.current, urlFor(data[0].imageReference).url())
  const recipeFilters = useSelector(selectRecipeFilter)
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="recipes" />
      <PageContent
        title="latest recipes"
        options={recipeFilters.filterOptions}
        filterState={recipeFilters.filterOpen}
        filterToggler={toggleRecipeFilter}
        data={data}
      />
      <Footer />
    </div>
  )
}

export default recipes
