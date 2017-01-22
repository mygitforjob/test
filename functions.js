<script>
// функции возвращающие функцию
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

// самоопределяемые функции

var foo = function(){
  console.log('foo');
  foo = function(){console.log('new foo')}
};

foo(); // foo
foo(); // new foo
</script>