import React from 'react'
import Style from './css/MobileProductsDetail.module.css'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function MobileProductsDetail() {
  return (
    <section className={Style.detail}>
      <div className={Style.title_box}>
        <Link to='/mobile/product'>
        <div className={Style.back_narrow}><GoArrowLeft /></div>
        </Link>
        <p className={Style.title}>상품상세</p>
      </div>
      <div className={Style.img}>
        <img src='/images/adult00.jpg' alt="성인"/>
      </div>
      <div className={Style.text_box}>
        <div className={Style.best}>BEST</div> 
        <p className={Style.name}>딩고</p>
        <p className={Style.text}>모험을 추구하는 작은 탐험가를 위해 전문적으로 제작된 주니어 자전거</p>
        <p className={Style.hashtag}>#내부케이블 #작은 손을 위해 설계된 브레이크 #모든 모험을 위한 타이어</p>
      </div>
      <div className={Style.detal_img}>
        <img src='/images/lolly_detail.jpg' alt="성인"/>
      </div>
      <div>
        
      </div>
    </section>
  )
}
