export default years = [
	{ 
		year: 2017, 
		months: [
			{
				month: 'feb',
				days: [
					{
						day: 2,
						debit: 200,
						credit: 1000,
						goods:[
				          { name: "шампунь", price: 150},
				          { name:"хлеб",price: 20},
				          { name: "масло", price: 110}
			        	]
			        },
			        {
						day: 2,
						debit: 200,
						credit: 1000,
						goods:[
				          { name: "шампунь", price: 150},
				          { name:"хлеб",price: 20},
				          { name: "масло", price: 110}
			        	]
			        }
		        ]	
			}
		]
	}

]
var z = new Date();
years[0].year === z.getFullYear()
years[0].months[0].month;

for(var i =0; i < years.length; i++){
	if(years[i] === this.props.year){
		if(years[i].month[i] == this.props.month)	
	}
}
// такая выборка вернет массив с днями
years["2017"]['feb'] == [1, 2, 3, {}, 5, 6, 7, {}]
days = years[this.props.year][this.props.month]// {}

years = {
	"2017": 
		{
			feb:[
					{
						day: 2,
						debit: 200,
						credit: 1000,
						goods:[
				          { name: "шампунь", price: 150},
				          { name:"хлеб",price: 20},
				          { name: "масло", price: 110}
			        	]
			        }, {
						day: 15,
						debit: 500,
						credit: 6500,
						goods:[
				          { name: "мыло", price: 150},
				          { name:"кофе",price: 20},
				          { name: "молоко", price: 110}
			        	]
			        }
			], 
			mar:[], 
			apr:[], 
			may:[]
		}
}

years['2017']['dec'] = []  
years['2017']['dec'][28] = {}  

funtion addDate(year, day){
	if(typeof years['2017']['dec'] == 'undefined'){
		years['2017']['dec'] = [];
	}	
	years['2017']['dec'][day.day] = day;
}	

function addDate (calend, year, month) {
	daysArr =  calend[year, month];

}