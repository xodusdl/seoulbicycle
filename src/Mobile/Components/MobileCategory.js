import React from 'react'
import Style from './css/MobileCategory.module.css'

export default function MobileCategory() {
  return (
    <section className={Style.category}>
      <p className={Style.title}>자전거 카테고리</p>
      <ul className={Style.img}>
        <li>성인</li>
        <li>주니어</li>
        <li>전기</li>
        <li>산악</li>
      </ul>
    </section>
  )
}
