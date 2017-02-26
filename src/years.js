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
// такая выборка вернет обект с днями
years["2017"]['feb'] == {}
days = years[this.props.year][this.props.month]// {}
