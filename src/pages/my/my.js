import React, { Component } from 'react'
import RHeader from '@/component/header'
import RFooter from '@/component/footer'

import GoodsItem from '@/component/goodsItem.js'
import * as Api from '@/api/index.js'
// import './index.css'

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
    Api.getCategory().then(res => {
      console.log('indexData', res.data)
    })
  }

  render () {
    let { indexData } = this.state
    return (
      <div style={{paddingBottom: '45px'}}>
        <RHeader />

        <RFooter activeClass="activeMy" />
      </div>
    )
  }
}
