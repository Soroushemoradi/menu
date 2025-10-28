import React from 'react'

function Col({ title, description, price, imageUrl, imageAlt }) {
  return (
    <>
      <div dir="rtl" className="flex w-1/2 pr-4 border rounded-2xl p-4 gap-3 items-start">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold mb-1">
            {title}
          </h2>
          <p className="text-sm mb-3 leading-relaxed break-words">
            {description}
          </p>
          <div className="flex w-40 border rounded-xl items-center justify-between">
            <span className="text-lg pr-2 font-semibold">
              {price}
            </span>
            <button className="bg-black/20 rounded-l-xl hover:bg-white/30 text-white rounded-md px-2 py-1 text-lg font-bold transition">
              +
            </button>
          </div>
        </div>

        <div className="w-60 flex-shrink-0">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>



    </>
  )
}

export default Col