import React from 'react'
import Style from './css/MobileCategory.module.css'

export default function MobileCategory() {
  return (
    <section className={Style.category}>
      <p className={Style.title}>자전거 카테고리</p>
      <ul className={Style.menu}>
        <li className={Style.selected}>ALL</li>
        <li>성인</li>
        <li>주니어</li>
        <li>전기</li>
        <li>산악</li>
      </ul>
      <ul className={Style.list}>
        <li><img src='./images/junior00.jpg' alt="주니어"/><p>클로버<span>개성만점 주니어 자전거</span></p></li>
        <li><img src='./images/junior01.jpg' alt="주니어"/><p>팝<span>개성만점 주니어 자전거</span></p></li>
        <li><img src='./images/junior02.jpg' alt="주니어"/><p>딩고<span>개성만점 주니어 자전거</span></p></li>
      </ul>
    </section>
  )
}
