export interface Options {
  header: string
  options: string[]
}
export interface Recipe {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  categories: [
    {
      _key: string
      _ref: string
      _type: string
    }
  ]
  howToMake: {
    _key: string
    _type: string
    children: { marks: []; text: string; _key: string; _type: string }[]
    markDefs: []
    style: string
  }[]

  imageReference: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
    crop: {
      _type: string
      bottom: number
      left: number
      right: number
      top: number
    }
    hotspot: {
      _type: string
      height: number
      width: number
      x: number
      y: number
    }
  }
  ingredients: {
    _key: string
    _type: string
    ingredientName: string
    quantity: number
  }[]

  recipeName: string
  slug: { _type: string; current: string }
}
