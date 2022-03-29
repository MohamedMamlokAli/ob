import React from 'react'

const Hero = () => {
  return (
    <section className="main relative">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        src="/homeImage.png"
        alt=""
      />
      <div className="absolute inset-0 flex h-full items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h2 className="text-center text-xl text-black">
            Do you want <br />a{' '}
            <span className="font-moc text-2xl font-bold text-[#7DAC5C]">
              healthy
            </span>{' '}
            life?
          </h2>
          <p className="max-w-[85%] text-sm text-gray-800">
            The first thing you need is to eat healthy. You can find everything
            about healthy eating here. On this site you can both read blog posts
            and use healthy recipes
          </p>
          <button className="rounded-md bg-[#7DAC5C] px-5 py-2 text-gray-200">
            START READING
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
