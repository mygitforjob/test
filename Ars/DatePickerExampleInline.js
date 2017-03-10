import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import './Style.css'
/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
const onChange = (props, fromOrTo) => (e, date) => {
	let d = date.toDateString();
	let ft = fromOrTo; 
	props.onChange(d, ft); 
}

const DatePickerExampleInline = (props) => (
  <div className="DP">
    <DatePicker hintText="Начало периода" container="inline" onChange={ onChange(props, 'from') }/>
    <DatePicker hintText="Конец периода" container="inline" onChange={ onChange(props, 'to') } />
  </div>
);

export default DatePickerExampleInline;