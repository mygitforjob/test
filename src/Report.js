import React, {Component} from 'react';
import './Report.css'
/*
	по умолчанию период месяц
	конечный день - будет сегодня
	начальный день - месяц назад
	month и minMonth
	если значение можно использовть в виде числа лучше использовть его в виде числа,
	 число привыше строки, так легче манипулировать данными
*/
class Report extends Component{
	constructor(props){
	//////////////////////////////////////////
		super(props);

		let fullMonth = ["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
		let shortMonth = fullMonth.map( m => m.substr(0, 3).toLowerCase() ) // янв, фев, мар...
		let self = this;
		let fullDate = new Date();
		let today = {
			day: fullDate.getUTCDate(),
			month: fullDate.getMonth(),
			year: fullDate.getFullYear(),
			maxDays: function(){return (new Date(this.year, this.month, 0)).getDate()},
			dday: function(d){
				let day = d || today.day;
				if(day > today.maxDays()) self.setState({toDate: {...self.state.toDate, day: 1}})
				else return self.setState({toDate: {...self.state.toDate, day}});	
			}
		}
		
		this.state = {
			fullMonth,
			shortMonth,
			fromDate: {day: 1, month: 4, year: 2017}, // месяц ранее эта дата не должна быть больше todate
			toDate: today // сегодня
		}
	//////////////////////////////////////////
	}

	componentDidMount(){
		let {day, month, year} = this.state.toDate; 
		console.log('Сегодня', month, year, 'day ' + day);
	}

	getMonths(){
		return this.state.fullMonth.map((m, k) => {
				return <option key={k} value={k}>{m}</option>
		})
	}
	getDays(month = this.state.toDate.month, year = this.state.toDate.year){
		
		
		let daysInMonth = new Date(year, ++month, 0).getDate();
		
		let daysOption = [];
		for(var i = 0; daysInMonth--;){
			daysOption.push(++i);
		}
		return daysOption.map((day, k) => {
				return <option key={k} value={day}>{day}</option>
		});
		
	}
	getYears(){

	}
	render(){
		let {day, month, year} = this.state.toDate;

		return (
			<div className='Report'>

				<div>
					Сегодня {day} {this.state.shortMonth[month]} {year}
					
				</div>
				<div className='Report-Select'>
					
					<div>
						<select defaultValue={ new Date().getMonth() }
						 	onChange={ (e) => { 
						 			let mon = e.target.value; 
						 			this.setState( {toDate:{...this.state.toDate, month: mon}} );
						 		}
						 	}
						>
							{this.getMonths( this.state.toDate.month )}
						</select>
					</div>
					
					<div>
						<select defaultValue={this.state.toDate.day}
								onChange={ (e) => {
									this.state.toDate.dday(e.target.value);
									//console.log(this.state.toDate.day)
								}
							}
						>
							{this.getDays()}
						</select>
					</div>

					<div>
						<select >
						    <option value="2014">2014</option>
						    <option value="2015">2015</option>
						    <option value="2016">2016</option>
						    <option defaultValue value="2017">2017</option>
					   </select>
					</div>
				</div>
				<div><span>Сформировать отчет</span></div>
			</div>
		)
	}
}

export default Report;