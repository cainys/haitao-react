import React, { Component } from 'react'
import RHeader from '../component/header'
import RFooter from '../component/footer'
import ReactSwipe from 'react-swipe'
import GoodsItem from '../component/goodsItem.js'
import * as Api from '../api/index.js'
import '../css/swiper.min.css'
import './index.css'

export default class Index extends Component {
  constructor (props) {
    super()
    this.state = {
      indexData: null,
      navItems: ['TOP榜', '每周上新', '维尼保障', '邀请有礼']
    }
  }
  componentWillMount () {
    this.init()
  }
  componentDidMount () {

  }

  init () {
    Api.indexMo().then(res => {
      console.log('indexData', res.data)
      this.setState({
        indexData: res.data
      })
    })
  }

  render () {
    let { indexData } = this.state
    return (
      <div style={{paddingBottom: '45px'}}>
        <RHeader />
        <div className="banner">
          {
            indexData !== null ? 
            <ReactSwipe className="banner-swiper" swipeOptions={{auto:2500,autoHeight:true}} >
              {
                indexData.bannerList.map(item => {
                  return (
                    <div key={item.id}>
                      <a target="_blank" href={item.adUrl}><img src={item.adImgUrl} alt=""/></a>
                    </div>
                  )
                })
              }
            </ReactSwipe>
            :
            <div className="banner-swiper"></div>
          }
        </div>
        <div className="nav clearfix">
          <a className="nav-item"><img src="../m-images/index-top.png" alt="" />TOP榜</a>
          <a className="nav-item"><img src="../m-images/index-new.png" alt="" />每周上新</a>
          <a className="nav-item"><img src="../m-images/index-support.png" alt="" />维尼保障</a>
          <a className="nav-item"><img src="../m-images/index-gift.png" alt="" />邀请有礼</a>
        </div>
        <div className="hot clearfix">
          <h2>热门推荐</h2>
          <ul className="clearfix">
            {
              indexData !== null && indexData.subject.map((item, index) =>{
                return (
                  <li key={index}>
                      <a to={{
                          pathname: `hot?themeId=${item.id}`
                      }}>
                          <img src={item.url} alt="" />
                      </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="global-selection">
            <h2>全球好货精选</h2>
            <ul className="clearfix com-goods-list">
              {
                indexData!== null && indexData.goodsType.map(item => {
                  return (
                    <GoodsItem goodsItem={item} key={item.goodsNo} />
                  )
                })
              }
            </ul>
        </div>
        <p className="com-end">就到这里吧，我也是有底线的!</p>
        <RFooter activeClass="activeIndex" />
      </div>
    )
  }
}
