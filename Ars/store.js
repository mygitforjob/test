
// цена запоминается по последней 

export default [ 
  { 
    date: "Fri Mar 15 2017",
    debit: function(){return this.goods.reduce((z, g) =>  z + g.price, 0)},
    credit: 65,
    goods:[
      { name: "мыло", price: 150},
      { name:"кофе",price: 20},
      { name: "молоко", price: 110}
    ]
  }, { 
    date: "Wed Mar 01 2017",
    debit: function(){return this.goods.reduce((z, g) =>  z + g.price, 0)},
    credit: 65,
    goods:[
      { name: "мыло", price: 150},
      { name:"кофе",price: 20},
      { name: "молоко", price: 110}
    ]
  }

]
//store[0].debit()

//let from = "Fri Mar 1 2017";
//let to = "Fri Mar 30 2017";

