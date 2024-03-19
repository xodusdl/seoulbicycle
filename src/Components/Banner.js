import React from 'react'
import Style from './css/Banner.module.css'

export default function Banner() {
  return (
    <section className={Style.banner}>
        <div className={Style.img_box}></div>
        <div className={Style.text_box}>
            <div className={Style.text}>
                <p>Experience the joy of cycling and unleash your inner adventurer !</p>
            </div>
        </div>
    </section>
  )
}
