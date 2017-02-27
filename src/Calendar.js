import React, { Component } from 'react';
//import './Calendar.css';
//import classnames from 'classnames';
import OneDay from './OneDay';
import store from './store';
//import createFragment from 'react-addons-create-fragment' 

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
    if(this.state.store['2017']) alert('aaa')
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
    while(--max) days.unshift(''); // пустые ячейки в начало месяца
    
    let end = 42 - days.length;    
    while(end){ // пустые ячейки в конец месяца
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

  addDate(dayz, store, year, month){ // добавить в массив дней, объект с данными, если они есть
    let daysArr =  store[year][month];
    if(!Array.isArray(daysArr)) return dayz;
    let i = 0;
    
    let length = daysArr.length;
    let d = dayz.map(function(v, k){
       
      if(i < length && v === daysArr[i].day ){
       let day = daysArr[i];
        i++
        //console.log(i++);
       //console.log('Зашли');
        return  day //daysArr[--i]
      }
       else{
        //console.log(v)
        return v;
       }  
    })

    return d;
  }

  getRenDayz(dayz, month){
    let today = new Date().getDate();
    let thisMonth = new Date().getMonth();
    let days = dayz.map(function(v, k){
      let todayClass;
      //todayClass = today == v ? 'today' : '';
      if(today === v && thisMonth == month) todayClass = 'today'
      let week = 'Days'
      //console.log(v, typeof v );
      if(typeof v === 'object'){
        console.log('Debit',v.debit);

        return (
          <div className={week} key={k}>
            <OneDay key={k} day={v.day} credit={v.credit} debit={v.debit} goods={v.goods} today={todayClass} />
          </div>
        )
      }else{
        
        
        return (
          <div className={week} key={k}>
            <OneDay key={k} day={v} credit={v.credit} debit={v.debit} today={todayClass}/>
          </div>
        )
      }
    })
    return days;
  }

  render() {
    let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'spt', 'nvm', 'dec']
    let dayz = this.getDayz(this.props.month); // массив с кол-ом дней
    //let d;
    dayz = this.addDate(dayz, this.state.store, this.props.year, month[this.props.month-1]); // добавить в массив дней, объект с данными, если они есть
    //console.log(dayz);
    //console.log(dayz, this.state.store, this.props.year, this.props.month);
    this.voidDays(dayz, this.props.voidDays);  // добавили пустые дни в массив
    dayz = this.getRenDayz(dayz, this.props.month-1);

    return ( 
      <div onClick={this.go.bind(this, 1, 1)} style={{clear: 'both'}} >
        {console.time('SPEED')}
          {dayz} 
        {console.timeEnd('SPEED')} 
        <div>календарь{this.state.store['2017']['feb'][0].debit}</div>
        
      </div>
    
    );
  }
}

export default Calendar;