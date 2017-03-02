import React, {Component} from 'react';
import './CostList.css';
import ReactDOM from 'react-dom';


class CostList extends Component{
	constructor(props){
		super(props);
		
		this.state = {left: 0, elWidth: 0};
	}
	onClick(){
		 console.log('width', ReactDOM.findDOMNode(this).offsetWidth);
		 let left = window.innerWidth / 2 - ReactDOM.findDOMNode(this).offsetWidth;
		 this.setState({left})
	}
	componentWillReceiveProps(){
		let left = window.innerWidth / 2 -  ReactDOM.findDOMNode(this).offsetWidth;
		console.log('LEFT', ReactDOM.findDOMNode(this).offsetWidth)
		this.setState({left});
	} 
	render(){
		let goods = this.props.goods.map(function(v, k){
			return <h5 key={k}>{v.name}: <i>{v.price}</i></h5>
		});
		let left = this.state.left; 
		console.log('elWidth', this.state.elWidth);
		return(
			<div className='CostList CostList-hidden' style={{left: left}} onClick={this.onClick.bind(this)}>
				{goods}
				
			</div>
		);
	}
}

export default CostList;