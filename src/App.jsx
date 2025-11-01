import React from 'react'
import './App.css'
import Col from './components/col/Col'
import Menu from './components/menu/Menu'

function App() {
  const hot = [
    { id: 'h1', title: 'قهوه ترک', subtitle: 'داغ و خوش‌‌عطر', imageUrl: '/Capture.PNG' },
    { id: 'h2', title: 'کاپوچینو', subtitle: 'خامه‌ای', imageUrl: '/Capture.PNG' },
    { id: 'h3', title: 'لاته', subtitle: 'نرم و شیرین', imageUrl: '/Capture.PNG' },
    { id: 'h4', title: 'اسپرسو', subtitle: 'قوی و تلخ', imageUrl: '/Capture.PNG' },
    { id: 'h5', title: 'موکا', subtitle: 'شکلاتی', imageUrl: '/Capture.PNG' },
    { id: 'h6', title: 'آمریکانو', subtitle: 'سبک و دلپذیر', imageUrl: '/Capture.PNG' },
    { id: 'h7', title: 'رستریا', subtitle: 'ترکیبی ویژه', imageUrl: '/Capture.PNG' },
    { id: 'h8', title: 'شوت اسپرسو', subtitle: 'اندازه کوچک', imageUrl: '/Capture.PNG' }
  ]

  const cold = [
    { id: 'c1', title: 'آیس‌کافی', subtitle: 'خنک و تازه', imageUrl: '/Capture.PNG' },
    { id: 'c2', title: 'شیک شکلات', subtitle: 'خنک و غنی', imageUrl: '/Capture.PNG' },
    { id: 'c3', title: 'آیس لاته', subtitle: 'خنک و لطیف', imageUrl: '/Capture.PNG' },
    { id: 'c4', title: 'آیس موکا', subtitle: 'شکلاتی و خنک', imageUrl: '/Capture.PNG' },
    { id: 'c5', title: 'لیموناد قهوه', subtitle: 'ترش و جالب', imageUrl: '/Capture.PNG' },
    { id: 'c6', title: 'شیک وانیل', subtitle: 'نرم و خوشمزه', imageUrl: '/Capture.PNG' }
  ]

  const cakes = [
    { id: 'k1', title: 'چیزکیک', subtitle: 'نرم و کرمی', imageUrl: '/Capture.PNG' },
    { id: 'k2', title: 'براونی', subtitle: 'شکلاتی', imageUrl: '/Capture.PNG' },
    { id: 'k3', title: 'پاناکوتا', subtitle: 'خوشمزه و لطیف', imageUrl: '/Capture.PNG' },
    { id: 'k4', title: 'کیک هویج', subtitle: 'معمولی و خوش‌طعم', imageUrl: '/Capture.PNG' },
    { id: 'k5', title: 'موس شکلات', subtitle: 'سبک و نرم', imageUrl: '/Capture.PNG' },
    { id: 'k6', title: 'تارت لیمو', subtitle: 'ترش و شیرین', imageUrl: '/Capture.PNG' }
  ]

  const categories = [
    { id: 'hot', title: 'نوشیدنی گرم', items: hot },
    { id: 'cold', title: 'نوشیدنی سرد', items: cold },
    { id: 'cake', title: 'کیک و دسر', items: cakes }
  ]

  const suggests =
    [
      {
        title: 'سینی پیشنهادی',
        description: 'مجموعه‌ای از نوشیدنی‌ها و کیک‌های منتخب',
        price: 35000,
        imageUrl: '/Capture.PNG'
      },
      {
        title: 'بسته ویژه',
        description: 'ترکیبی جذاب از کاپوچینو و براونی',
        price: 42000,
        imageUrl: '/Capture.PNG'
      }
    ]

  return (
    <div className="app-shell has-fixed-nav bg-amber-500">
      <Menu categories={categories} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {/* placeholder products to demonstrate grid */}
          {suggests.map((item, i) => (
            <Col key={i} title={item.title} description={item.description} price={item.price} imageUrl={item.imageUrl} imageAlt={item.title} />
          ))}
        </div>
    </div>
  )

}

export default App
