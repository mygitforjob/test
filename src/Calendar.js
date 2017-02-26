import React, { Component } from 'react';
//import './Calendar.css';
//import classnames from 'classnames';
import OneDay from './OneDay';
import store from './store';

class Calendar extends Component {
  constructor(props) {
    super(props);
    //console.log('YAYAYA')
    this.state = {
      isPressed: false,
      store: store
    };
  }

  onClick(){
    if(this.state.store['2017'])alert('aaa')
  }
  
  getDay(m, d){ // день недели первого числа месяца
    var date = new Date(2017, --m, d); 
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; 
    return days[date.getDay()] + ' по счету день ' +date.getDay();
  }

  getDays(m){
    return new Date(2017,m,0).getDate() // сколько дней в месяце
  }

  go(m, d){
    var weekday = this.getDay(m, d);
    var days = this.getDays(m);
    console.log('Weekday '+weekday, 'days '+days);
  }

  voidDays(days, max=1){ // добавили пустые дни в массив
     console.time('Calendar')
    if(max === 0) max = 7;
    //if(max === 1) max = 1;
    while(--max) days.unshift('');
    let end = 42 - days.length;
    
    while(end){
      if(end <= 0) return
      else days.push('');
      end--;
    }

     console.timeEnd('Calendar')
  }

  getDayz(m = new Date().getMonth() + 1){ // массив с кол-ом дней
    let maxdays = this.getDays(m);
    let dayz = [];
    for (var i = 1; i <= maxdays; i++){
          dayz.push(i) 
      }
    return dayz;
  }

  render() {
    let dayz = this.getDayz(this.props.month); // массив с кол-ом дней
    this.voidDays(dayz, this.props.voidDays);  // добавили пустые дни в массив

    dayz = dayz.map(function(v, k){
      let week = 'Days';
      /*
      if(v % 6) {
        week = 'Days';
      } 
      else{
        week = '';
      }
      */
      return (<div className={week} key={k}><OneDay key={k} day={v} /></div>)
      //return (<span key={k}> {v} </span>)
    });

    return ( 
      <div onClick={this.go.bind(this, 1, 1)} style={{clear: 'both'}} >
        {console.time('SPEED')}
          {dayz} 
        {console.timeEnd('SPEED')} 
        <div>календарь{this.state.store['2017']['feb'].days[0].debit}</div>
        
      </div>
    
    );
  }
}

export default Calendar;