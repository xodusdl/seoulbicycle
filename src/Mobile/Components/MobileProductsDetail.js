import React, { useEffect, useState } from 'react'
import Style from './css/MobileProductsDetail.module.css'
import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from 'react-router-dom';
import { getProductDetail } from '../../api/firebase';

export default function MobileProductsDetail() {

  const {productId} = useParams()
  // alert(productId)

  const [selectedItem, setSelectedItem] = useState({}) //{}오브젝트 넣어주기

  useEffect(()=>{
    getProductDetail(productId).then((res)=>{
      setSelectedItem(res)
    })

    // 스크롤 올라가는거
    window.scrollTo(0,0)
    
  },[productId])

  return (
    <section className={Style.detail}>
      <div className={Style.title_box}>
        <Link to='/mobile/product'>
        <div className={Style.back_narrow}><GoArrowLeft /></div>
        </Link>
        <p className={Style.title}>상품상세</p>
      </div>
      <div className={Style.img}>
        <img src={selectedItem?.image} alt={selectedItem?.name}/>
      </div>
      <div className={Style.text_box}>
        <div className={Style.best}>BEST</div>
        <p className={Style.name}>{selectedItem?.name}</p>
        <p className={Style.text}>{selectedItem?.text}</p>
        <p className={Style.hashtag}>{selectedItem?.tag}</p>
      </div>
      <div className={Style.detal_img}>
        <img src={selectedItem?.detailImg ? selectedItem.detailImg : "https://firebasestorage.googleapis.com/v0/b/bicycle-bd1e7.appspot.com/o/not_found_detail.jpg?alt=media&token=1e3ba370-6b81-48b8-8b11-d508b97d90d0"} alt=''/>
      </div>
      <div>
      </div>
    </section>
  )
}
