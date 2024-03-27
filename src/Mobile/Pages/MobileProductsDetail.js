import React, { useEffect, useState } from 'react'
import Style from './css/MobileProductsDetail.module.css'
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../api/firebase';
import MobileContentTitle from '../Components/MobileContentTitle';

export default function MobileProductsDetail() {

  const {productId} = useParams()

  const [selectedItem, setSelectedItem] = useState({})

  useEffect(()=>{
    getProductDetail(productId).then((res)=>{
      setSelectedItem(res)
    })
    window.scrollTo(0,0)
  },[productId])

  return (
    <section className={Style.detail}>
      <MobileContentTitle title='상세페이지'/>
      <div className={Style.img}>
        <img src={selectedItem?.image} alt={selectedItem?.name}/>
      </div>
      <div className={Style.text_box}>
        {
          selectedItem.isBest===true ? <div className={Style.best}>BEST</div> : ''
        }
        <p className={Style.name}>{selectedItem?.name}</p>
        <p className={Style.text}>{selectedItem?.text}</p>
        <p className={Style.hashtag}>{selectedItem?.tag}</p>
      </div>
      <div className={Style.detal_img}>
        <img src={selectedItem?.detailImg ? selectedItem.detailImg : "https://firebasestorage.googleapis.com/v0/b/bicycle-bd1e7.appspot.com/o/not_found_detail.jpg?alt=media&token=875519c2-d18c-4abc-b152-1a3901b3db8a"} alt=''/>
      </div>
      <div>
      </div>
    </section>
  )
}
