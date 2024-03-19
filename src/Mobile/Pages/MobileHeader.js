import React from 'react'
import Style from './css/MobileHeader.module.css'
import { CiMenuBurger } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function MobileHeader() {
  return (
<header className={Style.header}>
    <h1><img src="/images/mobile_logo.png" alt="logo"/></h1>
    <nav className={Style.mobile_menu}>
        <h2 className='hidden'>메인메뉴</h2>
        <CiMenuBurger/>
    </nav>
    <div className={Style.mobile_location} ><FaMapMarkerAlt /></div>
</header>
  )
}
