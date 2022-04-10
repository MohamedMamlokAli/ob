import React from 'react'
import CurrentPage from '../components/common/CurrentPage'
import PageContent from '../components/common/PageContent'
import Footer from '../components/home/Footer'

const recipes = () => {
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="recipes" />
      <PageContent title="latest recipes" />
      <Footer />
    </div>
  )
}

export default recipes
