// import React from 'react'

const categories = [
  'Tudo',
  'php',
  'Animações com anime.js',
  'Typescript',
  'Javascript',
  'React',
  'Vite',
  'Tailwindcss',
  'API',
]

const CategoryFilter = () => {
  return (
    <main className="flex md:ml-3 pb-3 pr-3 w-full">
      <div className="overflow-x-auto">
        <div className="flex gap-4 mx-3">
          {categories.map((item, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-3 py-1 rounded-lg cursor-pointer ${
                index === 0 ? 'bg-zinc-200 text-black' : 'bg-zinc-800'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

export default CategoryFilter
