import React, { useEffect, useState } from 'react'
import Style from './css/DetailProduct.module.css'
import SubVisual from '../Components/SubVisual'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../api/firebase'
// import useProducts from '../Hooks/useProducts'


export default function DetailProduct() {

  const {productId} = useParams()
  //alert(productId)

  // 1. 불러온거
  // const [allProducts] = useProducts()
  // 2. 불러온거에서 find 한거 <- 비동기 처리
  // const selectedItem=allProducts.find((item)=>(item.id===productId))

  // const selectedItem=getProductDetail()
  //애는 비동기처리 가 안되고 끄집어 낼때까지 기다려야 하니깐
  const [selectedItem, setSelectedItem] = useState({}) //{}오브젝트 넣어주기

  useEffect(()=>{
    getProductDetail(productId).then((res)=>{
      setSelectedItem(res)
    })

    // 스크롤 올라가는거
    window.scrollTo(0,0)
    
  },[productId])
  

  return (
    <>
    <SubVisual/>
    <section className={Style.detail_product}>
      <nav className={Style.page_map}>
        <ul className={Style.page_map_list}>
          <li></li>
          <li><a href="#;">카테고리</a></li>
          <li><a href="#;">{selectedItem?.category}</a></li>
          <li><a href="#;">{selectedItem?.name}</a></li>
        </ul>
      </nav>
      
      <div className={Style.detail}>
        <div className={Style.detail_img}>
          <img src={selectedItem?.image} alt={selectedItem?.name}/>
        </div>
        <div className={Style.detail_info}>
          <div className={Style.detial_title}>
            <p>{selectedItem?.category}</p>
            <p>{selectedItem?.name}</p>
          </div>
          <div className={Style.detial_sub_title}>{selectedItem?.text}</div>
          <div className={Style.detial_tag}>{selectedItem?.tag}</div>

          <ul className={Style.detial_info_list}>
            <li>프레임사이즈</li>
            <li>{selectedItem?.framSize}</li>
            <li>휠사이즈</li>
            <li>{selectedItem?.wheelSize}</li>
            <li>프레임 모양</li>
            <li>{selectedItem?.framShape}</li>
            <li>색상</li>
            <li>
              <div className={Style.color_box}>
                <div></div>
                <p>초록</p>
              </div>
              <div className={Style.color_box}>
                <div className={Style.selected}></div>
                <p>하늘</p>
              </div>
            </li>
          </ul>

          <button className={Style.find_btn}>가까운 대여소 찾기</button>
        </div>
      </div>

      <div className={Style.detail_bicycle}>
     
        <img alt='' src={selectedItem?.detailImg ? selectedItem.detailImg : "https://firebasestorage.googleapis.com/v0/b/bicycle-bd1e7.appspot.com/o/not_found_detail.jpg?alt=media&token=1e3ba370-6b81-48b8-8b11-d508b97d90d0"}/>
      </div>

      <div className={Style.use_box}>
        <div className={Style.use_info}>
          <p>이용권 구매</p>
          <div>
            <p className={Style.use_title}>정기권</p>
            <p className={Style.use_text}>정기권</p>
          </div>
          <div>
            <p className={Style.use_title}>일일권</p>
            <p className={Style.use_text}>1시간권, 2시간권</p>
          </div>
        </div>

        <div className={Style.use_info}>
          <p>이용권 사용안내</p>
          <ul className={Style.use_info_list}>
            <li>이용 가능시간은 첫 회 대여시점을 기준으로 계산합니다.</li>
            <li>서울자전거 모든 대여소에서 사용이 가능합니다.</li>
            <li>취소, 환불은 서울자전거 아래 환불규정에 따릅니다.</li>
            <li>이용권을 다른 사람에게 양도할 수 없으며, 양도로 인해 발생하는 불이익은 구매자가 책임지셔야 합니다.</li>
          </ul>
        </div>
      </div>

    </section>
    </>
  )
}

