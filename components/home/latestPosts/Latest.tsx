import React from 'react'
import Post from './Post'
import Posts from './Posts'

const Latest = () => {
  return (
    <section id="latestPosts" className="py-3 px-5">
      <h2 className="text-center text-xl uppercase">Latest Posts</h2>

      <Posts>
        <Post
          title={'The benefits of strawberries and blueberries for humans?'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        <Post
          title={'How should the perfect and healthy breakfast be?'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        <Post
          title={'Everything you need to know about avocados'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        <Post
          title={'How should walnuts and almonds be consumed?'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        {/* <Post
          title={'It is time to love your legumes'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        />
        <Post
          title={'Which type of bread is beneficial for our body?'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur incidunt illum assumenda blanditiis inventore a, omnis, adipisci id ea earum ipsa repudiandae reprehenderit ex corrupti sunt sit voluptatem quia voluptate asperiores itaque nulla.'
          }
        /> */}
      </Posts>
    </section>
  )
}

export default Latest
