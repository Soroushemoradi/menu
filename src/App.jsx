import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex items-center justify-between bg-[#3b2a16]/90 text-white rounded-2xl p-4 shadow-lg max-w-2xl">
      {/* توضیحات */}
      <div className="flex-1 pr-4">
        <h2 className="text-xl font-bold mb-1">بشقاب قزل آلا سوخاری</h2>
        <p className="text-sm text-gray-200 mb-3 leading-relaxed">
          یک عدد قزل آلای رودخانه‌ای، سیب زمینی سرخ‌شده، سبزیجات رست‌شده با سس لیمویی، همراه با برنج ایرانی کته
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">۳۴۹,۰۰۰ تومان</span>
          <button className="bg-white/20 hover:bg-white/30 text-white rounded-md px-2 py-1 text-lg font-bold transition">
            +
          </button>
        </div>
      </div>

      {/* عکس غذا */}
      <div className="w-36 h-28 flex-shrink-0">
        <img
          src="https://via.placeholder.com/150" // اینجا لینک عکس خودت رو بذار
          alt="قزل آلا سوخاری"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
    </>
  )
}

export default App
