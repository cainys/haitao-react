import React, { Component } from 'react'
import RHeader from '@/component/header'
import RFooter from '@/component/footer'

import GoodsItem from '@/component/goodsItem.js'
import * as Api from '@/api/index.js'
import './class.css'

export default class ClassIndex extends Component {
  constructor (props) {
    super()
    this.state = {
      oneClassList: [],
      twoClassList: [],
      categoryId : '',//一级页面ID
      isLoading : true,
      noNum : false,
      stagingStation : {}
    }
  }
  componentWillMount () {
    this.init()
  }
  componentDidMount () {

  }

  init () {
    // 一级tab菜单获取
    Api.getCategory().then(res => {
      console.log('indexData', res.data)
      if (res.data.message) {
        this.setState({
          oneClassList: res.data.classList
        })
        this.getCategoryTwo(res.data.classList[0].classid)
      }
    })
  }

  getCategoryTwo (classid) {
    Api.getCategoryTwo({categoryId: classid}).then(res => {
      console.log(res.data)
    })
  }

  render () {
    let { indexData } = this.state
    return (
      <div style={{paddingBottom: '45px'}}>
        <RHeader />
        <div className="classify-main clearfix">
          <div className="classify-tab">
            <ul>

            </ul>
          </div>
          <div className="classify-con"></div>
        </div>
        <RFooter activeClass="activeClass" />
      </div>
    )
  }
}
