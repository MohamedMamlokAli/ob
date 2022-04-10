import React from 'react'
import CurrentPage from '../components/common/CurrentPage'
import PageContent from '../components/common/PageContent'
import Footer from '../components/home/Footer'

const blogs = () => {
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="Blogs" />
      <PageContent title="latest blogs" />
      {/* <Footer /> */}
    </div>
  )
}

export default blogs
