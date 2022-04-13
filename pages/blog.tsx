import React from 'react'
import CurrentPage from '../components/common/CurrentPage'
import PageContent from '../components/common/PageContent'
import Footer from '../components/home/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { toggleBlogFilter, selectBlogFilter } from '../store/filter/filterSlice'
const blogs = () => {
  const blogFilters = useSelector(selectBlogFilter)
  const dispatch = useDispatch()
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="Blogs" />
      <PageContent
        title="latest blogs"
        options={blogFilters.filterOptions}
        filterState={blogFilters.filterOpen}
        filterToggler={toggleBlogFilter}
      />
      <Footer />
    </div>
  )
}

export default blogs
