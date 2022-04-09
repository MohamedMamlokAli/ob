import React from 'react'
import Recipe from './Recipe'
import Recipes from './Recipes'

const Latest = () => {
  return (
    <section id="latestPosts" className="py-3 px-5">
      <h2 className="text-center text-xl uppercase">most read Recipes</h2>

      <Recipes>
        <Recipe
          title={'The benefits of strawberries and blueberries for humans?'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        <Recipe
          title={'How should the perfect and healthy breakfast be?'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        <Recipe
          title={'Everything you need to know about avocados'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        <Recipe
          title={'How should walnuts and almonds be consumed?'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        {/* <Recipe
          title={'It is time to love your legumes'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        <Recipe
          title={'Which type of bread is beneficial for our body?'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        /> */}
      </Recipes>
    </section>
  )
}

export default Latest
