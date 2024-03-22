import React, { useState } from 'react'
import Style from './css/MobileProduct.module.css'
import { Link } from 'react-router-dom'
import useProducts from '../../Hooks/useProducts'

export default function MobileProduct() {

  const allCategorys=['전체보기' , '성인', '주니어', '산악', '전기']

  const [category , SetCategory] = useState('전체보기')

  const changeCategory=(category)=>{
    SetCategory(category)
  }

  const [allBicycle] = useProducts()

  let filterItems=getFilterItems(allBicycle, category)

  // alert(filterItems.length)

  function getFilterItems(a, b){
    if(b==='전체보기'){
        return (allBicycle)
    }else{
        return (
          a.filter((item)=>(item.category===b))
        )
    }
  }

  return (
    <section className={Style.product}>
      <p className={Style.title}>Category</p>
      <ul className={Style.category_menu}>
        {
          allCategorys.map((item)=>{
            return(
              <li className={`${item===category && Style.selected}`} onClick={()=>{changeCategory(item)}}>{item}</li>
            )
          })
        }
      </ul>

      <ul className={Style.product_list}>


      {
          filterItems.map((item)=>(
          <li><Link to={`/mobile/product/${item.id}`}>
            <div className={Style.img}>
            <img src={item.image} alt="성인"/>
            {
              item.isBest===true ? <div className={Style.best}>best</div> : ''
            }
            </div>
            </Link>
            <p className={Style.text}>{item.text}</p>
            <p className={Style.name}>{item.name}</p>
            <div className={Style.click_box}>
              <div className={Style.heart}>
                <img src='/images/click_heart.svg' alt="heart"/>
              </div>
              <div className={Style.cart}>
                <img src='/images/click_cart.svg' alt="cart"/>
              </div>
            </div>
             </li>
            ))
        }



        {/* <li>
          <Link to='/mobile/product/:productId'><div className={Style.img}>
            <div className={Style.best}>BEST</div> 
            <img src='/images/adult00.jpg' alt="성인"/>
          </div></Link>
          
          <p className={Style.text}>개성만점 주니어 자전거</p>
          <p className={Style.name}>클로버</p>
          <div className={Style.click_box}>
            <div className={Style.heart}>
              <img src='/images/click_heart.svg' alt="heart"/>
            </div>
            <div className={Style.cart}>
              <img src='/images/click_cart.svg' alt="cart"/>
            </div>
          </div>
        </li>
        <li>
          <Link to='/mobile/product/:productId'><div className={Style.img}>
            <div className={Style.best}>BEST</div> 
            <img src='/images/adult00.jpg' alt="성인"/>
          </div></Link>
          
          <p className={Style.text}>개성만점 주니어 자전거</p>
          <p className={Style.name}>클로버</p>
          <div className={Style.click_box}>
            <div className={Style.heart}>
              <img src='/images/click_heart.svg' alt="heart"/>
            </div>
            <div className={Style.cart}>
              <img src='/images/click_cart.svg' alt="cart"/>
            </div>
          </div>
        </li> */}

        
{/*  
        <li>
          <Link to='/mobile/product/:productId'><div className={Style.img}>
            <div className={Style.best}>BEST</div> 
            <img src='/images/adult00.jpg' alt="성인"/>
          </div></Link>
          
          <p className={Style.text}>개성만점 주니어 자전거</p>
          <p className={Style.name}>클로버</p>
          <div className={Style.click_box}>
            <div className={Style.heart}>
              <img src='/images/click_heart.svg' alt="heart"/>
            </div>
            <div className={Style.cart}>
              <img src='/images/click_cart.svg' alt="cart"/>
            </div>
          </div>
        </li>
*/}
      </ul>

    </section>
  )
}
