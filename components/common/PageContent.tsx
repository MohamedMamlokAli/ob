import React from 'react'
interface PageProps {
  title: string
}
const PageContent: React.FC<PageProps> = ({ title }) => {
  return (
    <div className="mt-5 w-full md:flex md:items-center">
      <div className="hidden w-1/3 md:block">asdsadasd</div>
      <div className="w-full">
        <h1 className=" text-center uppercase ">{title}</h1>
      </div>
    </div>
  )
}

export default PageContent
