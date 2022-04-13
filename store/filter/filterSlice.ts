import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Options } from '../../types'
import { RootState } from '../store'
interface Filter {
  name: string
  filterOptions: Options[]
  filterOpen: boolean
  filtersSelecter: string[]
}
interface State {
  blog: Filter
  recipe: Filter
}

const initialState: State = {
  blog: {
    name: 'blog',
    filterOptions: [
      {
        header: 'Category',
        options: [
          'Meat',
          'Vegetables',
          'Fruits',
          'Milk Products',
          'Legumes',
          'Smoothies',
          'Gluten Free',
          'Vegan',
        ],
      },
      {
        header: 'Sort',
        options: ['Latest', 'Highest Rated'],
      },
    ],
    filterOpen: false,
    filtersSelecter: [],
  },
  recipe: {
    name: 'recipe',
    filterOptions: [
      {
        header: 'Category',
        options: [
          'Main',
          'Salad',
          'Dessert',
          'Drinks',
          'Snacks',
          'Smoothies',
          'Gluten Free',
          'Vegan',
        ],
      },
      {
        header: 'Sort',
        options: ['Latest', 'Highest Rated'],
      },
    ],
    filterOpen: false,
    filtersSelecter: [],
  },
}
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleBlogFilter: (state) => {
      state.blog.filterOpen = !state.blog.filterOpen
    },
    toggleRecipeFilter: (state) => {
      state.recipe.filterOpen = !state.recipe.filterOpen
    },
  },
})

export const selectBlogFilter = (state: RootState) => state.filter.blog
export const selectRecipeFilter = (state: RootState) => state.filter.recipe

export const { toggleBlogFilter, toggleRecipeFilter } = filterSlice.actions
