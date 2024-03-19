import React from 'react'
import Style from './css/MobileVisual.module.css'

export default function MobileVisual() {
  return (
    <section className={Style.visual}>
      <h2 class="hidden">비주얼영역</h2>
      <ul className={Style.visual_list}>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ul className={Style.dot_list}>
        <li className={Style.selected}></li>
        <li></li>
        <li></li>
      </ul>
    </section>

  )
}
