import React, { Component } from 'react';
import './Day.css';
//import classnames from 'classnames';
class OneDay extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    //this.onClick = this.onClick.bind(this)
  }
  getGoods(){
    this.props.getGoods();
  }
  onClick(goods){
   if(!Array.isArray(goods)){
    return;
   }else{
      let str = '';
      for(var i=0; i < goods.length; i++){
        console.log(goods[i]);
        let {name, price} = goods[i]
        str += name + ': ' + price +'\n';
      }
      //this.getGoods(); 
      //alert(str);
    } 
  }

  render() {
    //let credit = this.props.credit;
    //let self = this;
    const getGoods = this.props.getGoods;
    return (   
        <div className={'Day '+this.props.today} onClick={ ()=>{ getGoods(); return this.onClick(this.props.goods)} }  >
            <div className="Day-day">{this.props.day}</div>
            <div className="Day-numbers">
              <div className="Day-credit">{this.props.credit}</div>
              <div className="Day-debit">{this.props.debit}</div>
            </div>
        </div>
    );
  }
}

export default OneDay;