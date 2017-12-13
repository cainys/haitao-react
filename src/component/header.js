import React, { Component } from 'react'
import './header.css'

export default class RHeader extends Component{
  render () {
    return (
      <header className="header">
        <h1>
          <img src="../m-images/logo.png" alt="logo" />
        </h1>
        <a className="search-logo"></a>
        <a className="shopping-logo"></a>
      </header>
    )
  }
}
