import React from 'react';
import ReactDOM from 'react-dom';
import commonMethods from  '@/js/common';
import App from '@/App.jsx';

window.commonMethods = commonMethods;

ReactDOM.render(<App />, document.getElementById('root'));
