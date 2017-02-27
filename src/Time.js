import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
  constructor(props) {
    super(props);
    let date = new Date().getMilliseconds();
    this.state = {date, time: 0, op: 'plus', number: 0};
  }

  handle(time){
    let self = this;
    return function(){
      if(self.state.time === 0)self.goTimer()
      let date = new Date().getMilliseconds();
      self.setState({date: time || date});  
      console.log(time, time || self.state.date);
    }
  }
  goTimer(){
    if(this.state.time <= 0) this.myTimer('plus');
    if(this.state.time >= 250) this.myTimer('minus');
  }
  myTimer(op){ // цвета
    let self = this;
    let count =  0;
    setInterval(function(){
      if(self.state.op === 'plus') {
        self.setState({time: count+=30})
        if(count > 250) self.setState({op: 'minus'});
      }
      else if(self.state.op === 'minus') {
        self.setState({time: count-=30})
        if(count < 1) self.setState({op: 'plus'});
      }
      //self.setState({time: ++count})
    }, 80);
  }

  render() {
    //console.log('Time render');
    let color = this.state.time; 
    let number = this.state.number;
    number++;
    let self = this;
    return ( 
      <div className="App Time">
          <h2 onClick={this.handle(new Date().getMilliseconds())}>Welcome to Time</h2>
          <p>{this.state.date}</p>
          <p style={{backgroundColor: 'rgb('+color+', 0, '+color+')'}}>{this.state.time}</p>
          <h4 onClick={function(){self.setState({number})}}>{self.state.number}</h4>
      </div>
    );
  }
}

export default Time;