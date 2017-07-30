/*设计模式学习代码*/

/*工厂模式*/
function factory(name, age) {
  var obj = {}
  obj.name = name
  obj.age = age
  obj.say = function() {
    console.log("my name is " + this.name + ",my age is " + this.age)
  }
  return obj
}
/*之后待续*/