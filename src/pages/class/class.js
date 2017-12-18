import React, { Component } from 'react'
import RHeader from '@/component/header'
import RFooter from '@/component/footer'
import { Link } from 'react-router-dom'
// import GoodsItem from '@/component/goodsItem.js'
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
      this.setState({
        twoClassList: res.data.classTwoList,
        categoryId: classid
      })
    })
  }

  render () {
    let { oneClassList, twoClassList } = this.state
    return (
      <div style={{paddingBottom: '45px'}}>
        <RHeader />
        <div className="classify-main clearfix">
          <div className="classify-tab">
            <ul>
              {
                oneClassList.map(item => {
                  return (
                    <li 
                      key={item.classid} 
                      id={item.classid}
                      className={ item.classid === this.state.categoryId ? 'tab-item active' : 'tab-item' }
                      onClick={this.getCategoryTwo.bind(this, item.classid)}
                      >
                        {item.classdesc}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="classify-con">
              <div className="con-slide">
              {
                twoClassList.map(item => {
                  return(
                    <div className="classify-items" key={item.id}>
                      <h2>{item.name}</h2>
                      <ul className="clearfix">
                        {
                          item.threeCategoryList.map(treeItem => {
                            return  (
                              <li key={treeItem.id}>
                                <Link
                                    to={`goodsResult?threeCategoryId=${treeItem.id}&twoCategoryName=${treeItem.threeName}`}
                                    className="link-items"
                                    id={treeItem.id}
                                >
                                    <img src={treeItem.imgUrl} alt="" />
                                    <p>{treeItem.threeName}</p>
                                </Link>
                            </li>
                            )
                          })                        
                        }
                      </ul>
                    </div>
                  )
                })
              }
              </div>
          </div>
        </div>
        <RFooter activeClass="activeClass" />
      </div>
    )
  }
}
