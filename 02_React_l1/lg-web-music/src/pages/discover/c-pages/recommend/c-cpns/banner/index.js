import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { BannerWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getBannerAction } from "../../store/action";
import { Carousel } from "antd";

const wyURL = `https://music.163.com/#/`
const targetTypeDict = {
  1: 'song',
  10: 'album'
}

function LuBanner (props) {
  // state
  const [index, setIndex] = useState(0)

  // { banner: state.get('recommend').get('banner') }
  const { banners } = useSelector(state => ({ banners: state.getIn(['recommend', 'banner']) }), shallowEqual)

  const dispatch = useDispatch()

  const carouselRef = useRef()

  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setIndex(to)
  }, [])

  const bgImage = `${banners[index]?.imageUrl}?imageView&blur=40x20`

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <div className="banner-left">
          <Carousel effect="fade"
                    autoplay
                    ref={carouselRef}
                    beforeChange={bannerChange}>
            {banners.map(banner => {
              const url = banner.url ? banner.url : `${wyURL}${targetTypeDict[banner.targetType]}?id=${banner.targetId}`
              return (
                <div key={banner.scm} className="banner-item">
                  <a href={url} className="image" target="_blank" rel="noreferrer">
                    <img src={banner.imageUrl}
                         alt={banner.typeTitle} className="image"/>
                  </a>
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="banner-right">
          <a href="https://music.163.com/#/download" rel="noreferrer" target="_blank"> </a>
        </div>
        <div className="banner-control">
          <div className="btn left" onClick={() => carouselRef.current.prev()}/>
          <div className="btn right" onClick={() => carouselRef.current.next()}/>
        </div>
      </div>
    </BannerWrapper>
  )
}

export default memo(LuBanner)
