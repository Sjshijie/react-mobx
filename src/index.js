import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react'
import * as store from './store'
import * as serviceWorker from './serviceWorker';

function test(target) {
  console.log(target)
}


@test
class Car {
  run() {
    console.log('Car is running')
  }
}

const c1 = new Car()


class S {
  constructor(){
    this.b=10
  }
  a = 10//共有
}
var a = new S();
console.log(a.a)
console.log(a.b)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
