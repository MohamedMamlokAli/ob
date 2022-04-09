import type { NextPage } from 'next'
import Footer from '../components/home/Footer'
import Hero from '../components/home/hero/Hero'
import LatestPosts from '../components/home/latestPosts/Latest'
import LatestRecipes from '../components/home/latestRecipes/Latest'
import InnerLayout from '../components/InnerLayout'
import { sanityClient } from '../lib/sanity-server.js'

export const getStaticProps = async () => {
  const query = '*[_type=="recipe"][0]{recipeName,imageReference,howToMake}'
  const data = await sanityClient.fetch(query)
  return {
    props: {
      data,
    },
  }
}
const Home: NextPage = ({ data }: any) => {
  console.log(data)
  return (
    <div>
      <Hero />
      <InnerLayout>
        <LatestPosts />
        <LatestRecipes />
      </InnerLayout>
      <Footer />

      {/* <h1>{data.recipeName}</h1> */}
      {/* <img
        src={`https://cdn.sanity.io/images/ng7njitd/production/${
          data.imageReference.asset._ref.split('-')[1] + '-1000x564.jpg'
        }`}
      />
      <div>
        {data.howToMake.map((recipe: any) => {
          return (
            <div key={recipe._key}>
              {recipe.style === 'normal' ? (
                <p>
                  {recipe.children &&
                    recipe.children.map((i: any) => {
                      return <i._type key={i._key}>{i.text}</i._type>
                    })}
                </p>
              ) : (
                <recipe.style>
                  {' '}
                  {recipe.children &&
                    recipe.children.map((i: any) => {
                      return (
                        <i._type
                          key={i._key}
                          className={`${
                            i.marks.includes('strong') && 'font-bold'
                          } ${i.marks.includes('em') && 'italic'}`}
                        >
                          {i.text}{' '}
                        </i._type>
                      )
                    })}
                </recipe.style>
              )}
            </div>
          )
        })}
      </div>
      <ol>
        <li>
          <p>1- Sanity cms</p>
          <ul className="ml-3">
            <li>1a- See how sanity works</li>
            <li>1b- Configure Sanity posts and comments</li>
            <li>1c- Test Sanity</li>
          </ul>
        </li>
      </ol> */}
    </div>
  )
}

export default Home
