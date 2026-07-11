// oop.js
// ===============================
// JavaScript OOP Master File
// ===============================

// 1. Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hi, I'm ${this.name}`);
};

const p1 = new Person("Aditya",20);
p1.greet();

// 2. Classes
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }

    speak(){
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Bruno","Golden Retriever");
dog.speak();

// 3. Encapsulation
class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const acc = new BankAccount();
acc.deposit(5000);
console.log(acc.getBalance());

// 4. Polymorphism
class Shape{
    area(){
        return 0;
    }
}

class Rectangle extends Shape{
    constructor(w,h){
        super();
        this.w=w;
        this.h=h;
    }

    area(){
        return this.w*this.h;
    }
}

console.log(new Rectangle(10,5).area());

// 5. Abstraction
class Car{
    start(){
        this.#engine();
        console.log("Car Started");
    }

    #engine(){
        console.log("Engine Running...");
    }
}

new Car().start();

// 6. Getters & Setters
class Student{
    constructor(name){
        this._name=name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length<2){
            console.log("Invalid Name");
            return;
        }
        this._name=value;
    }
}

const s=new Student("Adi");
console.log(s.name);
s.name="A";
s.name="Aditya";
console.log(s.name);

// instanceof
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
