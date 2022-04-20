import React from 'react'

const Nutritions = () => {
  return (
    <div className="max-w-[335px] border border-black p-2">
      <h3 className=" mb-3 text-2xl font-semibold">NUTRITION FACTS</h3>
      <p className="mb-3 text-sm text-gray-600">Serving size 90g</p>
      <hr className="mb-3 h-2 bg-black" />
      <h4 className="text-base font-semibold">Amount Per Serving</h4>
      <hr className="mb-0.5 h-0.5 bg-black" />
      <div className="flex justify-between text-sm">
        <span>Calories 77</span>
        <span>Calories from fat 9</span>
      </div>
      <hr className=" mb-0.5 h-0.5 bg-black" />
      <h4 className="text-right text-base font-semibold">% Daily Value</h4>
      <hr className="mb-0.5 h-0.5 bg-black" />
      <div className="flex justify-between text-sm">
        <span className="text-base font-semibold">Total fat 1g</span>
        <span>2%</span>
      </div>
      <hr className="mb-0.5 h-0.5 bg-black" />
      <div className="flex justify-between text-sm">
        <span className="text-base font-semibold">Cholesterol 0mg</span>
        <span>0%</span>
      </div>
      <hr className="mb-0.5 h-0.5 bg-black" />
      <div className="flex justify-between text-sm">
        <span className="text-base font-semibold">Sodium 13mg</span>
        <span>1%</span>
      </div>
      <hr className="mb-0.5 h-0.5 bg-black" />
      <div className="flex justify-between text-sm">
        <span className="text-base font-semibold">Carbohydrate 17g</span>
        <span>6%</span>
      </div>
      <hr className="mb-0.5 h-0.5 bg-black" />
      <div className="flex justify-between text-sm">
        <span className="text-base font-semibold">Protein 3g</span>
        <span>2%</span>
      </div>
      <hr className="mb-1 h-2 bg-black" />
      <div className="flex justify-between text-sm">
        <span>Vitamin A 3%</span>
        <span>Vitamin C 10%</span>
      </div>
      <hr className="mb-0.5 h-0.5 bg-black" />
      <div className="flex justify-between text-sm">
        <span>Calcium 0%</span>
        <span>Iron 3%</span>
      </div>
      <hr className="mb-0.5  h-0.5 bg-black" />
      <p className="text-sm">
        *Percent daily values are based on a 2,000 calorie diet.{' '}
      </p>
    </div>
  )
}

export default Nutritions
