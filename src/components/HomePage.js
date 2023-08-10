
import Navbar from './Navbar';
import Services from './Services';
import Features from './Features';
import ProductsShow from './ProductsShow';
import Products from '../cart/Products';
import Footer from './Footer';

 import React from 'react'
 
 const HomePage = () => {
   return (
     <>
    <Navbar />
    <Services />
    <Features />
    <ProductsShow />
    <Products />
    <Footer />
     </>
   )
 }
 
 export default HomePage