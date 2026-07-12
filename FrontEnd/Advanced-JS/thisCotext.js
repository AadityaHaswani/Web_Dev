const person = {
    name : "Aaditya",
    greet(){
     console.log(`Hello My Namw is ${this.name}`);
     
    },

};
person.greet();
const boundGreet = person.greet.bind({name:"Mayur"})
boundGreet()
    
