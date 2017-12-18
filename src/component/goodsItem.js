import React, { Component } from 'react'
import './goodsItem.css'

export default class goodsItem extends Component {

  render () {
    const { goodsItem } = this.props
    return (
      <li>
        <a>
          <div className="goods-img">
            <img src={goodsItem.imgUrl} width="100%" alt={goodsItem.goodsName} />
          </div>
          <p className="goods-der">
            <span>{goodsItem.goodsName}</span>
          </p>
          <div className="goods-price">
            <ins className="current-price">¥<span>{parseFloat(goodsItem.mallPrice).toFixed(2)}</span></ins>
            <del className="original-price">¥<span>{parseFloat(goodsItem.marketPrice).toFixed(2)}</span></del>
          </div>
        </a>
      </li>
    )
  }
}
