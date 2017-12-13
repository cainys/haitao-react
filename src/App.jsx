import React, { Component } from 'react';
// 引入react-redux配置
// import { Provider } from 'react-redux';
// 引入react-router配置
// import router from '@/router/index.jsx';
// 引入react-store配置
// import store from '@/store/index';
import ReactSwipe from 'react-swipe';
// 引入公共样式
import '@/css/common.css';
import RHeader from './component/header.js'

export default class App extends Component {
    render() {
        return (
            <RHeader />
        );
    }
}