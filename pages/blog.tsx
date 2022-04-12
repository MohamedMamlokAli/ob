import React from 'react'
import CurrentPage from '../components/common/CurrentPage'
import PageContent from '../components/common/PageContent'
import Footer from '../components/home/Footer'
import { Options } from '../types'
import { useSelector } from 'react-redux'
import { selectBlogFilter } from '../store/filter/filterSlice'
import store from '../store/store'
const blogs = () => {
  const filterOptions: Options[] = [
    {
      title: 'Category',
      filters: [
        'Meat',
        'Vegetables',
        'Fruits',
        'Milk Products',
        'Legumes',
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
  const blogFilters = useSelector(selectBlogFilter)
  console.log(blogFilters)
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="Blogs" />
      <PageContent title="latest blogs" options={blogFilters.filterOptions} />
      <Footer />
    </div>
  )
}

export default blogs
