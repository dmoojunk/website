import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';

require('../node_modules/reflex-grid/scss/reflex.scss');

require('file?name=[name].[ext]!../index.html');

window.onload = () => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#container')
  );
};