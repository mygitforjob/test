import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
//import injectTapEventPlugin from 'react-tap-event-plugin'; 

import DatePickerExampleInline from './DatePickerExampleInline';

import store from './store';
console.log('store',store);
/*let str = ''
let cat = ['питание', 'одежда', 'развлечения', 'дорога', 'гигиена'];
let product = [{name: 'мыло', cat: 4}, {name: 'шампунь', cat: 4}, {name: 'зубная паста', cat: 4}, {name: 'бритва', cat: 4}, ]
let goods = []*/

let fromDate = ''
let toDate = ''

///////////////////////////////////

/*let data = store.filter(function(v){
  let from = "Wed Mar 1 2017";
  let to = "Thu Mar 30 2017";
  if( (new Date(from)) < (new Date(v.date)) && (new Date(to)) > (new Date(v.date)) ) return true;
  if(from === v.date || to === v.date) return true;  
});

let debit  = data.reduce( function(s, d){ return s + d.debit() }, 0)
let credit = data.reduce( function(s, d){ return s + d.credit }, 0)
console.log('Debit', debit, 'Credit', credit)*/
///////////////////////////////////


const onChange = (date, fromOrTo) => {
  console.log(fromOrTo);
  if(fromOrTo === 'from') fromDate = date;
  else toDate = date
}

const onClick = () => {
  if(fromDate === '' || toDate === '') { alert('введите данные'); return;}

  let data = store.filter(function(v){
    //let fromDate = "Wed Mar 1 2017";
    //let toDate = "Thu Mar 30 2017";
    if( (new Date(fromDate)) < (new Date(v.date)) && (new Date(toDate)) > (new Date(v.date)) ) return true;
    if(fromDate === v.date || toDate === v.date) return true;
    else return false;  
  });

  let debit  = data.reduce( function(s, d){ return s + d.debit() }, 0)
  let credit = data.reduce( function(s, d){ return s + d.credit }, 0)
  console.log('Debit', debit, 'Credit', credit)    
  console.log('from', fromDate, 'to', toDate)
  let from_Date = new Date(fromDate).toLocaleDateString();
  let to_Date = new Date(toDate).toLocaleDateString();
  alert('С '+from_Date+"\n По "+to_Date + "\n Ваши расходы: "+ debit + "\n Ваши доходы: "+ credit)
}



const DatePicker = () => (
  <MuiThemeProvider>
    <div >
        <DatePickerExampleInline onChange={onChange}/>
        <MyAwesomeReactComponent onClick={onClick}/>
    </div>
   </MuiThemeProvider>
);



const App = () => (

      <div className="App" >
        <DatePicker />
      </div>
)
export default App;

