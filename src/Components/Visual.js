import React from 'react'
import Style from './css/Visual.module.css'

export default function Visual() {
  return (
    <section className={Style.visual}>
        <ul className={Style.visual_list}>
            <li>
                <div className={Style.visual_text_box}>
                    <p className={Style.visual_title}>빠르고 편리한 이동!</p>
                    <p className={Style.visual_text}>어디든지 쉽게 이동하고 환경도 보호하는 자전거 대여, 지금 시작해보세요</p>
                </div>
            </li>
            <li>
                <div className={Style.visual_text_box}>
                    <p className={Style.visual_title}>자연과 어울리는 자전거 여행!</p>
                    <p className={Style.visual_text}>아름다운 자연 풍경을 감상하며 건강과 활력을 얻을 수 있는 자전거 여행을 시작해보세요.</p>
                </div>
            </li>
            <li>
                <div className={Style.visual_text_box}>
                    <p className={Style.visual_title}>새로운 출퇴근 스타일!</p>
                    <p className={Style.visual_text}>자동차 대신 자전거 대여로 친환경적인 이동을 시작해보세요.</p>
                </div>
            </li>
        </ul>
        <div className={Style.slide_btn}>
            <div id="visual_bar">
                <p className={Style.visual_nowindex}>1</p>
                <div className={Style.visual_barline}></div>
                <p className={Style.visual_allindex}>3</p>
            </div>
            <button className={Style.left_btn}><i class="fa-solid fa-angle-left"></i></button>
            <button className={Style.right_btn}><i class="fa-solid fa-angle-right"></i></button>
        </div>
    </section>
  )
}
