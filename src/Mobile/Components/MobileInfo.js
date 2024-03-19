import React from 'react'
import Style from './css/MobileInfo.module.css'

export default function MobileInfo() {
  return (
    <section className={Style.info}>
      <div className={Style.info_text_box}>
        <p className={Style.info_title}>세계적인 자전거 도시 서울</p>
        <p className={Style.info_text}>언제나, 어디서나 쉽고 편리하게 이용할 수 있는<br/>저탄소 이동수단 서울 자전거</p>
      </div>
        <ul className={Style.info_list}>
            <li>
                <a href="#;">
                <div><img src='./images/rental.svg' alt="렌탈"/></div>
                <p>대여 및 반납</p></a>
            </li>
            <li>
              <a href="#;">
              <div><img src='/images/payment.svg' alt="지불"/></div>
              <p>결제/환불/마일리지</p></a>
            </li>
            <li>
              <a href="#;">
              <div><img src='/images/bicycle.svg' alt="자전거"/></div>
              <p>방치 자전거 발견</p></a>
            </li>
            <li>
              <a href="#;">
              <div><img src='./images/inquiry.svg' alt="문의"/></div>
              <p>문의내역</p></a>
            </li>
        </ul>
    </section>
  )
}
