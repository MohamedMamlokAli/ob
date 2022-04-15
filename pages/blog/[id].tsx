import React from 'react'
import CurrentPage from '../../components/common/CurrentPage'

const blog = () => {
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage
        page="Blogs"
        article="WHITE BEAN AND TUNA SALAD WITH BASIL VINAIGRETTE"
      />
      <div id="main-content">
        <div id="image-text">
          <div id="blog-image" className="h-52 w-full">
            <img
              src="/homeImage.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div id="blog-ingredients-how_to_make"></div>
        </div>
        <div id="nutritions-print">nutritions-print</div>
        <div id="read-more">read-more</div>
        {/* Footer */}
      </div>
    </div>
  )
}

export default blog
