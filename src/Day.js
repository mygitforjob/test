import React, { Component } from 'react';
import './Day.css';
import classnames from 'classnames';
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      dates:[
        {day: 25, credit: 200, debit: 300, goods: 
          [
            {name: 'шампунь', price: 150}, 
            {name: 'хлеб', price: 20}, 
            {name: 'масло', price: 110},  
          ]
        }
      ]
    };
  }
  handleBtn(){
    if(this.state.isPressed === false)
     this.setState({isPressed: true});
    else this.setState({isPressed: false});
    //alert('aa')
  }
  

  render(){

    var btnClass = classnames({
      'btn': true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });

    return ( 
      <div>

      <button className={btnClass} onClick={this.handleBtn.bind(this)}>Кнопка</button>

      <div>
        <h4>&lt;&lt; Февраль &gt;&gt;</h4>
      </div>
      
      <div className='Days'>

      <div className='Day-week'>
        <div>ПН</div>
        <div>ВТ</div>
        <div>СР</div>
        <div>ЧТ</div>
        <div>ПТ</div>
        <div>СБ</div>
        <div>ВС</div>


      </div>
      
        
      </div> 
      </div> 
    );
  }
}

export default Time;