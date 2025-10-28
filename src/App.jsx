import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Col from './components/col/Col'

function App() {
  const data = [
    {
      title: "sax",
      description: "sxsdcdcdcdcdeedededededeuyhuyreferhferfuhoriefhoerufherufhdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdx",
      price: 1000,
      imageUrl:"/Capture.PNG",
      imageAlt:"sdda"
    }
  ]

  console.log(data);
  return (
    <>
      {data.map((item, index) => (
        <Col
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
        />
      ))}
    </>
  )
}

export default App
