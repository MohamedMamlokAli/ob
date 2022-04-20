import React, { FC } from 'react'
interface Props {
  quantity: number
  ingredient: string
}
const Ingredient: FC<Props> = ({ quantity, ingredient }) => {
  return (
    <p className=" text-gray-600">
      <span>{quantity} grams</span> {ingredient}
    </p>
  )
}

export default Ingredient
