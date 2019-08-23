import React from 'react';
import logo from './logo.svg';
import './App.css';
import {observer,inject} from "mobx-react";


@inject('store')
@observer
class App extends React.Component {
  render(){
    console.log(this.props.store)
     return (
       <div>
          <button onClick={()=>{this.props.store.a.add()}}>点击</button>
          <Son></Son>
          {this.props.store.b.name}
       </div>
     )
  } 
}

@inject('store')
@observer
class Son extends React.Component {
  render(){
     return (
       <div>
          {this.props.store.a.count}
          {this.props.store.a.total}
       </div>
     )
  } 
}

export default App;
