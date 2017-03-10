import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
 
const MyAwesomeReactComponent = (props) => (
	<div className='DP RB' onClick={props.onClick}>
 	 	<RaisedButton label="Сформировать отчет" />
 	 </div>
);
 
export default MyAwesomeReactComponent;