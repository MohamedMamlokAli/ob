import React from 'react'

const Hero = () => {
  return (
    <section className="main lg:px-15  relative md:flex  md:flex-row-reverse md:justify-between md:px-10 xl:px-20 ">
      <div className="absolute h-full w-full flex-1  opacity-30 md:relative md:opacity-100">
        <img
          src="/homeImage.png"
          alt=""
          className="h-full w-full object-contain "
        />
      </div>
      <div className="absolute inset-0 flex h-full flex-1  items-center justify-center text-center md:relative  md:text-left">
        <div className="flex flex-col items-center justify-center space-y-2 md:items-start md:space-y-4 lg:space-y-6 2xl:space-y-10">
          <h2 className="text-center text-xl uppercase text-black md:text-left md:text-2xl lg:text-5xl">
            Do you want <br />a{' '}
            <span className="font-moc text-2xl font-bold text-[#7DAC5C] md:text-4xl lg:text-5xl">
              healthy
            </span>{' '}
            life?
          </h2>
          <p className="max-w-[85%] font-serif text-sm text-gray-700 md:max-w-[90%] md:text-base lg:max-w-[75%] 2xl:max-w-[50%] ">
            The first thing you need is to eat healthy. You can find everything
            about healthy eating here. On this site you can both read blog posts
            and use healthy recipes
          </p>
          <button className="whitespace-nowrap rounded-md bg-[#7DAC5C] px-5 py-4 text-white lg:w-4/12">
            START READING
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
