// function Cat(){
//     this.stomatch = [];
// };

// Cat.prototype.eat = function(mouse){
//     this.stomatch.push(mouse);
//     mouse.die();
// };

// module.exports = Cat;
// var fs = require("fs");
//============================== doc file khac
// var text = fs.readFileSync('./song.txt',{ encoding:'utf8'});
// console.log(text);
// var text = fs.readFileSync('./song.txt',{ encoding:'utf8'});
// console.log(text);
//============================== ghi file khac
// fs.writeFileSync('./song2.txt','I am Nam Coder');
// fs.writeFileSync('./song3.txt','I am Superman!!!');

// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May i have your name? ');
// console.log('Xin chao '+userName);
// var pet = {};
// var nums = [];
// var num = readlineSync.question('Nam sinh cua ban la: ');
// nums.push(num);
// console.log(nums);

// var name = readlineSync.question('Your pet name: ');
// var age = readlineSync.question('Your age: ');
// var gender = readlineSync.question('Your gender: ');
// pet.name = name;
// pet.age = age;
// pet.gender = gender;
// console.log(pet);

// const  ca = {
//     canitfly: false
// };
// Object.freeze(ca);
// ca.canitfly = true;
// ca = {pi:3.14};
// console.log(ca);
// const alligator = {  canItFly : false};
// Object.freeze(alligator);
// alligator.canItFly = true; // This is ignored
// // alligator = {pi: 3.14}; // This will throw an TypeError
// console.log(alligator); 
// function Cat(color){
//     this.stomach = [];
//     this.color = color;

// };
// Cat.prototype.eat = function(mouse){
//     this.stomach.push(mouse);
//     mouse.die();
//     // this.weight += Mouse.weight;
// };
// module.exports = Cat;       


// function Mouse(color){
//     this.color = color;
//     this.dead = false;
// }
// Mouse.prototype.die = function(){
//     this.dead = true;
// };
// function Cat(){
//     this.stomach = [];
// };

// Cat.prototype.eat = function(mouse){
//     this.stomach.push(mouse);
//     mouse.die();
// };
// var mickey = new Mouse('black');
// var jerry = new Mouse('orange');
// console.log(jerry);
// console.log(mickey);

// var tom = new Cat();
// tom.eat(mickey);
// tom.eat(jerry);
// console.log(tom);

// var a = {
//     name: 'Nam',

//     run: function(){
//         // var that = this;
//         setTimeout(()=>{
//             console.log(this.name);
//         },200);
//     }
// };
// a.run();
// function sum(){
//     console.log(`Hi ${this.name}. I am ${100}`);
// }
// var cat = {
//     name: 'Nam',
//     age: 100
// };
// console.log(sum.call(cat));

// const name = 'Tomcat';
// const cat = {
//     name,
//     run(){
        
//         setTimeout(()=>{
//             console.log(`${this.name} is running `);
//         },200);
        
//     }
    
// };
// cat.run();

// class Mouse{
//     constructor(name){
//         this.name = name;
//     }
//     run(){
//         console.log(`${this.name} is running`);
//     }
// };
// const mouse = new Mouse('Nam');
// mouse.run();
// function Person(name,password){
//     this.name = name;
//     this.password = password;
// }
// Person.prototype.getName = function(){
//     return this.name;
// }
// Person.prototype.getPassword = function(){
//     return this.password;
// }
// Person.prototype.getLevel = function(){//prototype phuong thuc
//     return this.level;
// }
// Person.prototype.level = "admin";//prototype thuoc tinh
// function User(name,password){
//     this.name = name;
//     this.password = password;
// }
// User.prototype = new Person();
// User.prototype = new Person();
// var person = new Person('Nam',21);
// var user = new User('Phuong',21);
// console.log(user.getName());
// console.log(person.getName());



// ==========================       __proto__ =================
// let dongvat ={
//     ten: "Dong vat",
//     uongNuoc(){
//         // var that = this;
//         setTimeout(function(){
//             console.log(this.ten + " dang uoc nuoc ");
//         }.bind(this),100);
//     }
// };
// let meo = {
//     ten: "Meo"
// };
// let cho ={
//     ten: "Cho"

// };
// meo.__proto__ = dongvat;
// cho.__proto__ = dongvat;
// meo.uongNuoc();
// cho.uongNuoc();
// console.log(Object.keys(meo));

// prototype

// let dongvat = {
//     name: "Dong Vat"
// };
// function meo(){
//     var cat = "Meo con";
//     console.log(cat);
// };
// let cho = function(name){
//     this.name = name;
// };
// meo.prototype = dongvat;
// cho.prototype = dongvat;
// let meocon = new meo();
// console.log(meocon.name);
// let chocon = new cho("mickey");
// console.log(chocon.name);
// console.log(cho("chocon"));

//===========prototype================================

// function Person(name,password){
//     this.name = name;
//     this.password = password;
// }
// Person.prototype.getName = function(){
//     return this.name = name;
// }
// Person.prototype.getPassword = function(){
//     return this.password = password;
// }
// Person.prototype.getLevel = function(){
//     return this.level = level;
// }
// Person.prototype.level = 'Admin';

// function User(name,password){
//     this.name = name;
//     this.password = password;
// }
// User.prototype = new Person();
// var person = new Person('Nam','123456');
// var user = new User('Tong','213456');
// var people = [];
// people.push(person);
// people.push(user);
// // console.log(user.level);
// // console.log(people);

// Date.prototype.vnTime= function(){
//     var yyyy = this.getFullYear();
//     var mm = this.getMonth()+1;
//     var dd = this.getDate();
//     return dd + "/"+mm+"/"+yyyy;
// }
// var now = new Date();
// var xms = new Date(2016,11,25);
// console.log(now.vnTime());
// console.log(xms.vnTime());

// ham an danh (ham khong ten)
// var firstname = 'Nam';
// (function(lastname){
//     var firstname = 'Duc';
//     lastname = 'Tong';
//     console.log(firstname);
//     console.log(lastname);
// }());
// console.log(firstname);
// var name = function(a,b){

// }
// function name(){
    
// }


// var triangle = {
//     a:1,
//     b:2,
//     c:3
// };
// for(const prop in triangle){
//     console.log(`triangle.${prop} = ${triangle[prop]}`);
// }


var triangle = {
    a:1,
    b:2,
    c:3
};
function colorTriangle(){
    this.color = 'red';
    this.name = 'do';
};
colorTriangle.prototype = triangle;
var obj = new colorTriangle();
for(const prop in obj){
    if(obj.hasOwnProperty(prop)){
        console.log(`obj.${prop} = ${obj[prop]}`);
    }
}






















