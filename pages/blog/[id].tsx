import { InferGetStaticPropsType } from 'next'
import React from 'react'
import CurrentPage from '../../components/common/CurrentPage'
import HowToMake from '../../components/recipeComponents/HowToMake'
import Ingredient from '../../components/recipeComponents/Ingredient'
import Nutritions from '../../components/recipeComponents/Nutritions'
import { urlFor } from '../../lib/sanity'
import { sanityClient } from '../../lib/sanity-server'
import { Recipe } from '../../types'

const blog = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(post)
  return (
    <div className="page lg:px-15 container mx-auto px-5 xl:px-20 ">
      <CurrentPage page="Recipes" article={post.recipeName} />
      <div id="main-content">
        <div id="image-text" className="space-y-9">
          <div id="blog-image" className="h-52 w-full">
            <img
              src={urlFor(post.imageReference).url()}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <section id="blog-ingredients-how_to_make" className="space-y-9">
            <div id="ingredients" className="space-y-2">
              <h2 className="mb-4 text-lg capitalize">Ingredients</h2>
              {post.ingredients.map((ingredientob) => (
                <Ingredient
                  ingredient={ingredientob.ingredientName}
                  quantity={ingredientob.quantity}
                  key={ingredientob._key}
                />
              ))}
            </div>
            <div id="how-to-make">
              <h2 className="mb-4 text-lg capitalize">How To Make</h2>
              <HowToMake content={post.howToMake[0].children[0].text} />
            </div>
          </section>
        </div>
        <div id="nutritions-print">
          <Nutritions />
        </div>
        <div id="read-more">read-more</div>
        {/* Footer */}
      </div>
    </div>
  )
}

export default blog

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
  const post: Recipe = await sanityClient.fetch(
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
