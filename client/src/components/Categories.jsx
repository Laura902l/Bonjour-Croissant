import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

function Categories() {
  const { navigate } = useAppContext()

  return (
    <div className="mt-20 mx-4 md:mx-8">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-yellow-900 tracking-wide">
          Discover Our Menu
        </h2>
        <p className="text-sm md:text-base text-yellow-700 mt-2 italic">
          Freshly baked, perfectly brewed — the Parisian way
        </p>
      </div>

      {/* Категории */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-[#F8EBD7]"
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`)
              scrollTo(0, 0)
            }}
          >
            {/* Фото */}
            <div className="w-full h-48 md:h-56 overflow-hidden">
              <img
                src={category.image}
                alt={category.text}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Название */}
            <div className="py-4 text-center">
              <p className="text-lg font-semibold text-yellow-900 group-hover:text-yellow-800 transition">
                {category.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
