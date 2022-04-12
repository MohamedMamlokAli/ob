import React from 'react'
import CurrentPage from '../components/common/CurrentPage'
import PageContent from '../components/common/PageContent'
import Footer from '../components/home/Footer'
import { useSelector } from 'react-redux'
import { selectRecipeFilter } from '../store/filter/filterSlice'

const recipes = () => {
  const recipeFilters = useSelector(selectRecipeFilter)
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="recipes" />
      <PageContent
        title="latest recipes"
        options={recipeFilters.filterOptions}
      />
      <Footer />
    </div>
  )
}

export default recipes
