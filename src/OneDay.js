import React, { Component } from 'react';
//import './Day.css';
//import classnames from 'classnames';
class OneDay extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  

  render() {
    return (   
        <div className="Day">
            <div className="Day-day">{this.props.day}</div>
            <div className="Day-numbers">
              <div className="Day-credit">60</div>
              <div className="Day-debit">250</div>
            </div>
        </div>
    );
  }
}

export default OneDay;