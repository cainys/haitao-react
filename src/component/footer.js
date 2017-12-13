import React, { Component } from 'react'
import './footer.css'

export default class RFooter extends Component{
  render () {
    return (
      <footer className="footer">
        <ul>
          <li><a className="footer-index">首页</a></li>
          <li><a className="footer-classify">分类</a></li>
          <li><a className="footer-my">我的</a></li>
        </ul>
      </footer>
    )
  }
}
