import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import './Calendar.css';
//import classnames from 'classnames';
import OneDay from './OneDay';
import CostList from './CostList';
import store from './store';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      store: store,
      goods: [],
      hidden: 'none'
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



  voidDays(days, max=1){ // добавили пустые дни в массив
    if(max === 0) max = 7;
    //if(max === 1) max = 1;
    while(--max) days.unshift(''); // пустые ячейки в начало месяца
    
    let end = 42 - days.length;    
    while(end){ // пустые ячейки в конец месяца
      if(end <= 0) return
      else days.push('');
      end--;
    }
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
    return dayz.map(function(v, k){
      if(i < length && v === daysArr[i].day ){
        let day = daysArr[i];
        i++
        return  day;
      }else{
        return v;
      }  
    })
  }
  getGoods(goods){
    this.setState({goods: goods, hidden:'block'});
  }
  getRenDayz(dayz, month){
    let self = this;
    let today = new Date().getDate();
    let thisMonth = new Date().getMonth();
    let days = dayz.map(function(v, k){
      let week = 'Days';
      let todayClass;      
      if(today === v && thisMonth === month) todayClass = 'today'
      
      if(typeof v === 'object'){
        //console.log('Debit',v.debit);
        return (
          <div className={week} key={k}>
            <OneDay key={k} day={v.day} 
              credit={v.credit} debit={v.debit} 
              goods={v.goods} today={todayClass} getGoods={self.getGoods.bind(self, v.goods)} />
              
          </div>
        )
      }else{
        return (
          <div className={week} key={k}>
            <OneDay key={k} day={v} credit={v.credit} debit={v.debit} today={todayClass} 
            getGoods={ function(){self.setState({hidden:'none'});} } />
          </div>
        )
      }
    })
    return days;
  }
  

  render() {
    let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'spt', 'nvm', 'dec']
    let dayz = this.getDayz(this.props.month); // массив с кол-ом дней
    dayz = this.addDate(dayz, this.state.store, this.props.year, month[this.props.month-1]); // добавить в массив дней, объект с данными, если они есть
    
    this.voidDays(dayz, this.props.voidDays);  // добавили пустые дни в массив
    dayz = this.getRenDayz(dayz, this.props.month-1);

    return ( 
      <div>
        <div style={{clear: 'both'}} >
          {dayz} 
        </div>
        <div style={{'display': this.state.hidden}}> 
         <CostList  goods={this.state.goods}/>
        </div> 
       </div>    

    );
  }
}

export default Calendar;