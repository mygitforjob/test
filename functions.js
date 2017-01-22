<script>
/*
* Функции возвращающие функцию
*/
function setupName(name){
  var name = name;
  return function(){ return name }
}

getName = setupName('Mike')
console.log(getName())
/////////////////////////////////////////////

var getName = (function(name){
  var name = name;
  return function(){ return name }
})('Luke')


console.log(getName());

/*
* Самоопределяемые функции
*/
var foo = function(){
  console.log('foo');
  foo = function(){console.log('new foo')}
};

foo(); // foo
foo(); // new foo

// пример
var getName = function(name){
  var name = name;
  getName = function(){ console.log(name) }
}

getName('Roni'); 
getName(); // Roni

/*
* Немедленная инициализация объектов
*/
({
  name: 'Mike',
  age: 25,
  init : function(){console.log(this.name + ' - ' + this.age)}
}).init()
////////////////////////////////
var x = ({
  name: 'Mike',
  age: 25,
  init : function(){console.log(this.name + ' - ' + this.age); return this} // добавили return
}).init()

console.log(x.name)

/*
* Свойства функций – шаблон мемоизации
* используем свойство функции для хранения данных
*/
var myFunc = function (param) {
	if (!myFunc.cache[param]) {
		var result = 1;

		myFunc.cache[param] = result;
	}
	return myFunc.cache[param];
};

myFunc.cache = {}; // хранилище результатов

myFunc('name'); myFunc('se'); myFunc('be'); 

console.log(myFunc.cache)ж // { be: 1,  name: 1, se: 1 }

/*
* Каррирование
*/
function add(x) {
  var num = x;
  return function(x2){
    return num + x2
  }
} 
console.log( add(4)(3) ); 

var add4 = add(4);
console.log(add4(5))

var add2 = (a)=>(b)=>(c)=> a+b+c;
console.log( add2(1)(2)(3) )
</script>