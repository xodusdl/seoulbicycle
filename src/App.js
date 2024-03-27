import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Faq from './Pages/Faq'
import About from './Pages/About'
import Product from './Pages/Product'
import DetailProduct from './Pages/DetailProduct'

import MobileRoot from './Mobile/Pages/MobileRoot'
import MobileNotFound from './Mobile/Pages/MobileNotFound'
import MobileHome from './Mobile/Pages/MobileHome'
import MobileBrand from './Mobile/Pages/MobileBrand'
import MobileProduct from './Mobile/Pages/MobileProduct'
import MobileCustomer from './Mobile/Pages/MobileCustomer'
import MobileProductsDetail from './Mobile/Pages/MobileProductsDetail'

import { isMobile } from 'react-device-detect';

export default function App() {
  
  let a=null;

  if(isMobile){
    a=createBrowserRouter([
      {
        path:'/',
        element:<MobileRoot/>,
        errorElement:<MobileNotFound/>,
        children:[
          {index:true, element:<MobileHome/>},
          {path:'/mobile/brand', element:<MobileBrand/>},
          {path:'/mobile/product', element:<MobileProduct/>},
          {path:'/mobile/customer', element:<MobileCustomer/>},
        ]
      },
      {
        path:'/mobile/product/:productId',
        element:<MobileProductsDetail/>,
        errorElement:<MobileNotFound/>
      }
    ])
  }else{
    a=createBrowserRouter([
      {
        path:'/',
        element:<Root/>,
        errorElement:<NotFound/>,
        children:[
          {index:true, element:<Home/>},
          {path:'/about', element:<About/>},
          {path:'/product', element:<Product/>},
          {path:'/product/:productId', element:<DetailProduct/>},
          {path:'/faq', element:<Faq/>}
        ]
      }
    ])
  }
  
  return (
    <RouterProvider router={a}/>
  )
}

