import React from 'react'
import CurrentPage from '../components/common/CurrentPage'
import PageContent from '../components/common/PageContent'
import Footer from '../components/home/Footer'
import { Options } from '../types'
import { useSelector, useDispatch } from 'react-redux'
import { toggleBlogFilter, selectBlogFilter } from '../store/filter/filterSlice'
import store from '../store/store'
const blogs = () => {
  const blogFilters = useSelector(selectBlogFilter)
  const dispatch = useDispatch()
  console.log(blogFilters)
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="Blogs" />
      <PageContent title="latest blogs" options={blogFilters.filterOptions} />
      <button onClick={() => dispatch(toggleBlogFilter())}>open filter</button>
      <Footer />
    </div>
  )
}

export default blogs
