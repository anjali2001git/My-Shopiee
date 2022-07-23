import React from 'react'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
const Home=()=> {
  return (
    <div >
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home