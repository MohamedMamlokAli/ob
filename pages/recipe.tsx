import React from 'react'
import CurrentPage from '../components/common/CurrentPage'
import PageContent from '../components/common/PageContent'
import Footer from '../components/home/Footer'
import { Options } from '../types'

const recipes = () => {
  const filterOptions: Options[] = [
    {
      title: 'Category',
      filters: [
        'Main',
        'Salad',
        'Dessert',
        'Drinks',
        'Snacks',
        'Smoothies',
        'Gluten Free',
        'Vegan',
      ],
    },
    {
      title: 'Sort',
      filters: ['Latest', 'Highest Rated'],
    },
  ]

  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="recipes" />
      <PageContent title="latest recipes" options={filterOptions} />
      <Footer />
    </div>
  )
}

export default recipes
