import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './my.css'

export default class Login extends Component {
  render () {
    return (
      <div>
        <div className="login-header">
          <Link to="/" className="header-back-white"></Link>
          <img src="../../m-images/login-bg.jpg" alt="" />
        </div>
        <div className="login-main">
          <div className="phone-pwd">
            <div className="phone">
              <input type="phone" placeholder="请输入账号" />
            </div>
            <div className="pwd">
              <input type="password" placeholder="请输入密码" />
            </div>
          </div>
          <a className="com-next">登录</a>
          <p className="register-back">
            <Link to="/">立即注册</Link>
            <Link to="/">忘记密码?</Link>
          </p>
          <div className="other-login">
            <img src="../../m-images/other-login.jpg" alt="" />
            {/*<ul className="other-login-main">
              <li><Link to="" className="qq"></Link></li>
              <li><Link to="" className="wb"></Link></li>
          </ul>*/}
          </div>
        </div>
      </div>
    )
  }
}