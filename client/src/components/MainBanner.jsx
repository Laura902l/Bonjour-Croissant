import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className="relative">
     
      <img
        src={assets.main_banner_bg_sm}
        alt="Main Banner"
  className="w-full h-auto object-cover block md:hidden"
      />
       <img
        src={assets.main_banner_bg}
        alt="Main Banner"
  className="w-full h-[750px] object-cover hidden md:block"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-200 leading-tight drop-shadow-2xl">
          Bonjour Croissant
        </h1>

        <p className="text-lg md:text-xl text-yellow-50 mt-4 max-w-xl drop-shadow-md">
          A Taste of Paris in Every Bite - handcrafted and baked fresh every morning.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-10 font-medium">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-8 py-3 bg-yellow-900 hover:bg-yellow-800 transition rounded text-white shadow-lg"
          >
            Shop now
            <img
              className="transition group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          <Link
            to="/products"
            className="group flex items-center gap-2 px-8 py-3 border border-yellow-100 text-yellow-100 rounded hover:bg-yellow-100 hover:text-yellow-900 transition shadow-md"
          >
            Explore menu
            <img
              className="transition group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
