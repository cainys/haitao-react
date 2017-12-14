import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default class RFooter extends Component{
  render () {
    return (
      <footer className="footer">
        <ul>
          <li><Link to="/" className={this.props.activeClass === 'activeIndex' ? 'footer-index-active' : 'footer-index'}>首页</Link></li>
          <li><Link to="/class" className={this.props.activeClass === 'activeClass' ? 'footer-classify-active' : 'footer-classify'}>分类</Link></li>
          <li><Link to="/my" className={this.props.activeClass === 'activeMy' ? 'footer-my-active' : 'footer-my'}>我的</Link></li>
        </ul>
      </footer>
    )
  }
}
