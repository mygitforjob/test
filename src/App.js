import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Time from './Time';
import Day from './Day';
import Calendar from './Calendar';


class App extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let month = date.getMonth() + 1;
    let voidDays = new Date(2017, month, 1).getDay();
    this.state = {date: '', month: month, voidDays: voidDays};
  }
  getGoods(){}
  onClick(){
    let month  = this.state.month; 
    let m = this.state.month;
    month = month > 11 ? 1 : ++month; 
    this.setState({month});

    m = m > 11 ? 0 : m;
    let voidDays = new Date(2017, m, 1).getDay();
    //console.log("Дней "+m);
    //voidDays = voidDays === 1 ? 6 : --voidDays; 
    
    this.setState({voidDays})
  }

  render() {
    //console.log('App render'); 
    const m = ["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    return ( 
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Домашний бухгалтер</h2>
          <p>{this.state.date}</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Time />

        <div style={{clear: 'both'}}>
          <button onClick={this.onClick.bind(this)}>
            {m[this.state.month-1]}
          </button>
        </div> 
        <Day month={m[this.state.month-1]} />
         
        <Calendar 
          month={this.state.month} 
          voidDays={this.state.voidDays}
          year={'2017'} />

      </div>
    );
  }
}

export default App;
