import { groq } from 'next-sanity'
import React from 'react'
import CurrentPage from '../../components/common/CurrentPage'
import { urlFor } from '../../lib/sanity'
import { sanityClient } from '../../lib/sanity-server'

const postQuery = groq`
*[_type == "recipe" && slug.current == $slug][0]`
const blog = ({ post }: any) => {
  console.log(post)
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="Blogs" article={post.recipeName} />
      <div id="main-content">
        <div id="image-text">
          <div id="blog-image" className="h-52 w-full">
            <img
              src={urlFor(post.imageReference).url()}
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
// export async function getStaticProps(ctx: any) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const post = await sanityClient.fetch(
//     `
//     *[_type == "recipe" && slug.current == 'broccoli-soup'][0]
//   `
//   )
//   console.log(post)
//   return {
//     props: {
//       post,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const paths = await sanityClient.fetch(
//     groq`*[_type == "recipe"]{
//       _id
//       slug{
//         current
//       }
//     }`
//   )

//   return {
//     paths: paths.map((post: any) => ({ params: post.slug.current })),
//   }
// }
export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "recipe" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: any) => ({ params: { id: String(slug) } })),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { id } = context.params
  const post = await sanityClient.fetch(
    `
    *[_type == "recipe" && slug.current == $id][0]
  `,
    { id }
  )
  return {
    props: {
      post,
    },
  }
}
