import React from 'react'
import './App.css'
import Col from './components/col/Col'
import Menu from './components/menu/Menu'

function App() {
  const hot = [
    { id: 'h1', title: 'سایفون', subtitle: 'دو کاپ، 20 الی 30 گرم پودر قهوه به روش نوین دم آوری', imageUrl: '/tea.png' },
    { id: 'h2', title: 'کاپوچینو', subtitle: 'خامه‌ای', imageUrl: '/tea2.png' },
    { id: 'h3', title: 'لاته', subtitle: 'ترکیب هنر و قهوه، اسپرسو، فوم شیر، شیر بخار داده شده، خامه', imageUrl: '/tea3.png' },
    { id: 'h4', title: 'دمنوش', subtitle: 'گلاب، شربت زعفران، چهار گل، عرق کاسنی', imageUrl: '/tea4.png' },
    { id: 'h5', title: 'موکا', subtitle: 'شکلاتی', imageUrl: '/tea5.png' },
    { id: 'h6', title: 'آمریکانو', subtitle: 'سبک و دلپذیر', imageUrl: '/tea6.png' },
    { id: 'h7', title: 'هات چاکلت', subtitle: 'انبوهی از شکلات داغ، شیر، شکلات رنده شده، کاکائو، شکر، فوم شیر، بیسکویت، کپ', imageUrl: '/tea7.png' },
    { id: 'h8', title: 'شوت اسپرسو', subtitle: 'اندازه کوچک', imageUrl: '/tea8.png' },
    { id: 'h9', title: 'شوت اسپرسو', subtitle: 'اندازه کوچک', imageUrl: '/tea9.png' }
  ]

  const cold = [
    { id: 'c1', title: 'آیس‌کافی', subtitle: 'خنک و تازه', imageUrl: '/Ace.png' },
    { id: 'c2', title: 'شیک شکلات', subtitle: 'خنک و غنی', imageUrl: '/Ace2.png' },
    { id: 'c3', title: 'آیس لاته', subtitle: 'خنک و لطیف', imageUrl: '/Ace3.png' },
    { id: 'c4', title: 'آیس موکا', subtitle: 'شکلاتی و خنک', imageUrl: '/Ace4.png' },
    { id: 'c5', title: 'لیموناد قهوه', subtitle: 'ترش و جالب', imageUrl: '/Ace5.png' },
    { id: 'c6', title: 'شیک وانیل', subtitle: 'نرم و خوشمزه', imageUrl: '/Ace6.png' },
    { id: 'c7', title: 'لیموناد قهوه', subtitle: 'ترش و جالب', imageUrl: '/Ace7.png' },
    { id: 'c8', title: 'شیک وانیل', subtitle: 'نرم و خوشمزه', imageUrl: '/Ace8.png' },
    { id: 'c9', title: 'شیک وانیل', subtitle: 'نرم و خوشمزه', imageUrl: '/Ace9.png' }
  ]

  const cakes = [
    { id: 'k1', title: 'چیزکیک', subtitle: 'نرم و کرمی', imageUrl: '/cake.png' },
    { id: 'k2', title: 'براونی', subtitle: 'شکلاتی', imageUrl: '/cake2.png' },
    { id: 'k3', title: 'پاناکوتا', subtitle: 'خوشمزه و لطیف', imageUrl: '/cake3.png' },
    { id: 'k4', title: 'کیک هویج', subtitle: 'معمولی و خوش‌طعم', imageUrl: '/cake4.png' },
    { id: 'k5', title: 'موس شکلات', subtitle: 'سبک و نرم', imageUrl: '/cake5.png' },
    { id: 'k6', title: 'تارت لیمو', subtitle: 'ترش و شیرین', imageUrl: '/cake6.png' },
    { id: 'k7', title: 'موس شکلات', subtitle: 'سبک و نرم', imageUrl: '/cake7.png' },
    { id: 'k8', title: 'تارت لیمو', subtitle: 'ترش و شیرین', imageUrl: '/cake8.png' },
    { id: 'k9', title: 'تارت لیمو', subtitle: 'ترش و شیرین', imageUrl: '/cake9.png' }
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
        imageUrl: '/coffee2.jpg'
      },
      {
        title: 'بسته ویژه',
        description: 'ترکیبی جذاب از کاپوچینو و براونی',
        price: 42000,
        imageUrl: '/coffee1.jpg'
      }
    ]

  return (
    <div className="app-shell has-fixed-nav bg-[#342309]">
      <Menu categories={categories} />

    </div>
  )

}

export default App
