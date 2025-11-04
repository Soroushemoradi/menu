import React from 'react'

function Col({ title, description, price, imageUrl, imageAlt }) {
  return (
    <>
      <div dir="rtl" className="flex w-full pr-4 rounded-2xl p-4 gap-4 items-start shadow-sm hover:shadow-lg transition-shadow duration-200 bg-card">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold mb-1">
            {title}
          </h2>
          <p className="text-sm mb-3 leading-relaxed break-words">
            {description}
          </p>
          <div className="w-20 border rounded-xl text-center items-center p-1 bg-white/60">
            <span className="text-lg text-center font-semibold bg-gradient-to-r from-[#34b6ef] to-sky-500 text-white px-2 py-0.5 rounded-lg inline-block">
              {typeof price === 'number' ? price.toLocaleString() : price} تومان
            </span>
          </div>
        </div>
        <div className="w-40 sm:w-56 shrink-0">
          <img src={imageUrl} alt={imageAlt} className="w-full h-36 object-cover rounded-xl" />
        </div>
      </div>

    </>
  )
}

export default Col