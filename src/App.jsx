import React from 'react'
import './App.css'
import Col from './components/col/Col'
import Menu from './components/menu/Menu'

function App() {
  const hot = [
    { id: 'h1', title: 'سایفون', subtitle: 'دو کاپ، 20 الی 30 گرم پودر قهوه به روش نوین دم آوری', imageUrl: '/tea.png', price: 120000 },
    { id: 'h2', title: 'کاپوچینو', subtitle: 'خامه‌ای', imageUrl: '/tea2.png', price: 85000 },
    { id: 'h3', title: 'لاته', subtitle: 'ترکیب هنر و قهوه، اسپرسو، فوم شیر، شیر بخار داده شده، خامه', imageUrl: '/tea3.png', price: 90000 },
    { id: 'h4', title: 'دمنوش', subtitle: 'گلاب، شربت زعفران، چهار گل، عرق کاسنی', imageUrl: '/tea4.png', price: 70000 },
    { id: 'h5', title: 'موکا', subtitle: 'شکلاتی', imageUrl: '/tea5.png', price: 98000 },
    { id: 'h6', title: 'آمریکانو', subtitle: 'سبک و دلپذیر', imageUrl: '/tea6.png', price: 65000 },
    { id: 'h7', title: 'هات چاکلت', subtitle: 'انبوهی از شکلات داغ، شیر، شکلات رنده شده، کاکائو، شکر، فوم شیر، بیسکویت، کپ', imageUrl: '/tea7.png', price: 105000 },
    { id: 'h8', title: 'شوت اسپرسو', subtitle: 'اندازه کوچک', imageUrl: '/tea8.png', price: 40000 },
    { id: 'h9', title: 'شوت اسپرسو', subtitle: 'اندازه کوچک', imageUrl: '/tea9.png', price: 40000 }
  ]

  const cold = [
    { id: 'c1', title: 'آیس‌کافی', subtitle: 'خنک و تازه', imageUrl: '/Ace.png', price: 78000 },
    { id: 'c2', title: 'شیک شکلات', subtitle: 'خنک و غنی', imageUrl: '/Ace2.png', price: 95000 },
    { id: 'c3', title: 'آیس لاته', subtitle: 'خنک و لطیف', imageUrl: '/Ace3.png', price: 82000 },
    { id: 'c4', title: 'آیس موکا', subtitle: 'شکلاتی و خنک', imageUrl: '/Ace4.png', price: 90000 },
    { id: 'c5', title: 'لیموناد قهوه', subtitle: 'ترش و جالب', imageUrl: '/Ace5.png', price: 70000 },
    { id: 'c6', title: 'شیک وانیل', subtitle: 'نرم و خوشمزه', imageUrl: '/Ace6.png', price: 88000 },
    { id: 'c7', title: 'لیموناد قهوه', subtitle: 'ترش و جالب', imageUrl: '/Ace7.png', price: 70000 },
    { id: 'c8', title: 'شیک وانیل', subtitle: 'نرم و خوشمزه', imageUrl: '/Ace8.png', price: 88000 },
    { id: 'c9', title: 'شیک وانیل', subtitle: 'نرم و خوشمزه', imageUrl: '/Ace9.png', price: 88000 }
  ]

  const cakes = [
    { id: 'k1', title: 'چیزکیک', subtitle: 'نرم و کرمی', imageUrl: '/cake.png', price: 115000 },
    { id: 'k2', title: 'براونی', subtitle: 'شکلاتی', imageUrl: '/cake2.png', price: 90000 },
    { id: 'k3', title: 'پاناکوتا', subtitle: 'خوشمزه و لطیف', imageUrl: '/cake3.png', price: 85000 },
    { id: 'k4', title: 'کیک هویج', subtitle: 'معمولی و خوش‌طعم', imageUrl: '/cake4.png', price: 78000 },
    { id: 'k5', title: 'موس شکلات', subtitle: 'سبک و نرم', imageUrl: '/cake5.png', price: 92000 },
    { id: 'k6', title: 'تارت لیمو', subtitle: 'ترش و شیرین', imageUrl: '/cake6.png', price: 98000 },
    { id: 'k7', title: 'موس شکلات', subtitle: 'سبک و نرم', imageUrl: '/cake7.png', price: 92000 },
    { id: 'k8', title: 'تارت لیمو', subtitle: 'ترش و شیرین', imageUrl: '/cake8.png', price: 98000 },
    { id: 'k9', title: 'تارت لیمو', subtitle: 'ترش و شیرین', imageUrl: '/cake9.png', price: 98000 }
  ]

  const categories = [
    { id: 'hot', title: 'نوشیدنی گرم', items: hot },
    { id: 'cold', title: 'نوشیدنی سرد', items: cold },
    { id: 'cake', title: 'کیک و دسر', items: cakes }
  ]

  return (
    <div className="app-shell has-fixed-nav bg-[#34b6ef]">
      <Menu categories={categories} />
    </div>
  )

}

export default App
