function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
   return console.log(`Hello My Name Is ${this.name}`);
}
 let Aaditya = new Person("Aaditya")
 Aaditya.greet()
 