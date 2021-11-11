// const app = (function(){
//     const cars = [];
//     return {
//         get(index){
//             return cars[index];
//         },
//         add(car){
//             cars.push(car);
//         },
//         edit(index,car){
//             cars[index] = car;
//         },
//         delete(index){
//             cars.splice(index, 1);
//         },
//     }
// })()

// var items = ['Tom','Nam','Phuong'];
// var item = items.map(function(x){return x}).join('><');
// console.log('<'+item+'>');

// reduce
// var item = items.reduce(function(item,result){
    // return item +'<'+result+'>'; 
// },'');
// console.log(item);

// var employees  = [
//     {name: 'Nam',age: 22},
//     {name: 'Phuong',age:21},
//     {name: 'Phuc',age: 26}
// ];
// var employee = employees.sort(function(a,b){
//     return b.age - a.age;
// }); 
// console.log(employee);

// function rollADie(){
//     // var die = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//     var num = 10*Math.random();
    
//     if(num>=1&&num<=6){

//         console.log(Math.ceil(num));
//     }
//     else{
//         console.log(Math.ceil(num));
//     }
// }
// rollADie();



// function tom(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// var tom1 = new tom('Nam',21,'male');
// var tom2 = new tom('Phuong',22,'female');
// var tom3 = new tom('Join',20,'male');
// var toms = [];
// toms.push(tom1);
// toms.push(tom2);
// toms.push(tom3);
// console.log(toms);



// function Mouse(color,weight){
//     this.type = 'mouse';
//     this.color = color;
//     this.weight = weight;
//     // this.sleep = function(){
//         // console.log('Sleepping....');
//     // };
// }

// Mouse.prototype.sleep = function(){
//     console.log('Sleeping...');
// };
// var m1 = new Mouse('red',4);
// var m2 = new Mouse('green',5);
//  console.log(m1.sleep===m2.sleep);

// var Mouse = require('./mouse');
// var Cat = require('./cat');
// var mickey = new Mouse('black');
// var jerry = new Mouse('Yellow');

// console.log(mickey);
// console.log(jerry);
// var tom = new Cat();
// tom.eat(mickey);
// tom.eat(jerry);
// console.log(mickey);
// console.log(jerry);
// console.log(tom);

// const array = [1,5,6,7,3,6,20];
// let index = 2;
// console.log(`phan tu thu ${index} la so ${array.prototype.at(3)}`);

// const cart = ['Nam','Phuong','Thao','Nhung'];
// function returnLast(arr){
//     return arr.at(-1);
// }
// const item = returnLast(cart);
// console.log(item);
// cart.push('Nam');
// const item1 = returnLast(cart);
// console.log(item1);

// var Mouse= require('./mouse');
// var Cat = require('./cat');
// var mickey = new Mouse('black');
// var jerry = new Mouse('Orange');
// // console.log(mickey);
// // console.log(jerry);
// var Tom = new Cat('Black');
// Tom.eat(jerry);
// Tom.eat(mickey);
// console.log(Tom);

// promise
// var promise = new Promise(
//     function(resolve, reject) {
//         // resolve('Thanh cong');
//         // reject('That bai');
//         let n=9;
//         if(n%2!=0){
//             resolve('Thanh cong');
//         }
//         else{
//             reject('That bai');
//         }
//     });

//     promise
//     .then(function(){
//        return new Promise(function(resolve){
//            setTimeout(function(){
//                resolve(['Thanh cong']);
//            },3000);
//        })
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log(error);
//     }).finally(function(){
//         console.log('Done!');
//     });

// function sleep(ms){
//     // return new Promise(function(resolve){
//         return new Promise((resolve)=>{
//             setTimeout(resolve,ms);
//         });
// }
// sleep(1000).then(function(){
//     console.log(1);
//     return sleep(1000);
// })
// .then(function(){
//     console.log(2);
//     return sleep(1000);
// })
// .then(function(){
//     console.log(3);
//     return sleep(1000);
// })
// .then(function(){
//     console.log(4);
//     return sleep(1000);
// })
// .finally(function(){
//     console.log('Done!!!!!');
// });

// ========================arrow function
// return value;
// const sum =(a,b)=>a+b;


// return Object
// const sum = (a,b)=>({a:a,b:b});
// console.log(sum(6,3)); 

// const logger = log=>console.log(log);
// console.log('Nam');

// const course = {
//     name: 'Javascript basic',
//     getName: function(){
//         return this.name;
//     }
// };
// console.log(course.getName());
// const person =function(name,weight){
    // this.name = name;
    // this.weight = weight;
// };
// var per = new person('Nam',70);
// console.log(per);

// const Nam = 'Ngon';
// const Weight = 'Chuan';
// const person = `${Nam} ${Weight}`;
// console.log(person);

// enhanced object literals

// var fieldName = 'New Name';
// var fieldPrice = 'price';
// const course = {
//     name: 'Javascript',
//     [fieldName]: 'Javascript',
//     [fieldPrice]: 1000,
//     getName(){
//         console.log('Tong Duc Nam');
//     }
// };
// console.log(course.getName());

//default parameter value
// function logger(log='Gia tri mac dinh!'){
    // console.log(log);
// }
// function logger(log){
    // log = 'Tong Duc Nam';
    // console.log(log);
// }
// logger();


// function logger(log,type='log'){
    // console[type](log);
// }
// logger('Message...','error');


// destructuring

// var course = {
//     name: 'Javascript',
//     price: 1000,
//     image: 'image-address',
// };
// var {name,...newrest} = course;
// // console.log(name);
// console.log(newrest);

// =====================rest parameter 
// function sum(...args){
//     let sum=0;
//     args.forEach((arg)=>sum+=arg) 
//     return sum;
// }
// console.log(sum(1));
// console.log(sum(1,2));
// console.log(sum(1,2,3,5,10));

// function addList(list,...args){
//     args.forEach((arg)=>list.push(arg))
//         console.log(list);    
// }
// addList([1],2,3);


// function sum(){
//     let total =0;
//     for(let argument of arguments){total+=argument;}
//     console.log(total);
// }
// sum(1,2,4);

// let arr = [1,2,3,4,3,2,1];
// let arr1 = [4,3,5,6,7,6,5];
// let meged = [0,...arr,10,...arr1];

// console.log(meged);

// function sum(...Args){
//     return Args.reduce((a,b)=>{
//         return a*b;
//     });
// }
// console.log(sum(1,2,3,4,5));


// function myFun(a,b,...manyMoreArgs){
//     console.log("a",b);
//     console.log("b",a);
//     console.log("manyMoreArgs",manyMoreArgs);

// }
// myFun("one","Tong","Duc","Nam");

// function multiply(multi,...theArgs){
//     return theArgs.map(element=>{
//         return multi*element;
//     });
// }
// let arr = multiply(2,15,25,45);

// console.log(arr);

// function sortRestArray(...theArg){
//     return theArg.sort((a,b)=>b-a);
// };
// console.log(sortRestArray(5,7,6,3,1));

// function sortArgument(){
//     let args = Array.from(arguments).sort((a,b)=>b-a);
//     return args;
// }
// console.log(sortArgument(1,5,3,9,7,0,3,9,8));

// ============ spread operator
// var arr1 = ['Java','PHP','C'];
// var arr2 = ['Javascript','C++','C#'];
// var array3 = [...arr2,...arr1];

// console.log(array3);

// var object={
//     name: 'Tong Duc Nam'
// };
// var object1={
//     age: 21
// };
// var person = {
//     ...object,
//     ...object1
// };
// console.log(person.name +'\n'+person.age);

//promise
// let p = new Promise((resolve,reject)=>{
//     let a = 1+2;
//     if(a==2){
//         resolve('Success');
//     }
//     else{
//         reject('Fail');
//     }
// })
// p.then((message)=>{
//     console.log('This is in the then '+message);
// }).catch((message)=>{
//     console.log('This is in the catch '+message);
// })

// const recordone = new Promise((resolve, reject) => {
//     resolve('Video 1 OK');
// });
// const recordtwo = new Promise((resolve,reject) => {
//     reject('video 2 fail');
// });
// const recordthree = new Promise((resolve,reject)=>{
//     resolve('Video 3 OK');
// });
// Promise.race([recordone, recordtwo, recordthree]).then((message)=>console.log(message));


// callback

// const userLeft = false;
// const userWatchingCatMeme = true;
// function watchTutorialCalback(callback,errorCallback) {
//     if(userLeft){
//         errorCallback({
//             name: 'user Left',
//             message: ':('
//         })
//     }
//     else if(userWatchingCatMeme){
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     }
//     else{
//         callback('Thumbs up and Subcribe');
//     }
// }
// watchTutorialCalback((message)=>{
//     console.log('Success: '+message);
// },(error)=>{
//     console.log(error.name+' '+error.message);
// })


// promise

// const userLeft = true;
// const userCat = true;
// function watchingpromise(){
//    return new Promise((resolve, reject)=>{
//     if(userLeft){
//         resolve({
//             name: 'Tong Duc Nam',
//             message: 'Happy'
//         })
//     }
//     else if(userCat){
//         reject({
//             name: 'User watching cat',
//             message:'Sad'
//         })       
//     }
//     else{
//         resolve('Nothing');
//     }
//     })
// }
// watchingpromise((message)=>{
//     console.log('Success '+message);
// },(error)=>{
//     console.log(error.name+' '+error.message);
// })
// let  p = new Promise((resolve,reject)=>{
//     let a= 1+2;
//     if(a==0){
//         resolve('Success');
//     }
//     else{
//         reject('Fail');
//     }
// })

// p.then((message)=>{
//     console.log('Thanh cong '+message);
// }).catch((error)=>{
//     console.log('That bai: '+error);
// })



// ==============arguments

// function sum(){
//     let sum = 0;
//     for(var i=0;i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     console.log(sum);
// }
// sum(5,8,6,9,7,3);

// function sum(){
//     let sum = 0;
//     const  array = Array.from(arguments);
//     // console.log(typeof array);
//     sum = array.reduce((a,b)=>a+b);
//     console.log(sum);
// }
// sum(5,8,6,9,7);




// const person ={
//     name: 'Tong Duc Nam',
//     age: 18,
//     gender: 'male',
//     address: 'Ninh Binh'
// }
// function printUser({name,age}){
//     console.log(`my name  is: ${name}, my age is ${age}`);
// }
// printUser(person);
// const{...rest} = person;
// console.log(name);
// for(let i=0;i<rest.length;i++) {
    // console.log(rest[i]);
// }
// console.log(rest);
// console.log(age);
// console.log(gender);





//================closure========================
// function createLogger(namespace){
//     function logger(message){
//         console.log(`[${namespace}] ${message}`);
//     }
//     return logger;
// }
// const infologger = createLogger('Info');
// infologger('Bat dau gui Mail');
// infologger('Da gui thanh cong');


// function createStorage(key){
//     const store = JSON.parse(localStorage.getItem(key))??{};
//     const save = ()=>{
//         localStorage.setItem(key,JSON.stringify(store));
//     }
//     const storage = {
//         get(key){
//             return store[key];
//         },
//         set(key,value){
//             store[key] = value;
//             save();
//         },
//         remove(key){
//             delete store[key];
//             save();
//         }
//     }
//     return storage;
// }
// const profileSetting = createStorage('profile_setting');
// console.log(profileSetting.get('fullname'));
// profileSetting.set('fullname','Tong Duc Nam');
// console.log(profileSetting.get('age'));
// profileSetting.set('age',20);
// console.log(profileSetting.get('address'));
// profileSetting.set('address','Ha Noi');

// const profileSetting2 = createStorage('profile_Name');
// console.log(profileSetting2.get('fullname'));
// profileSetting2.set('fullname','Phuong pham');
// console.log(profileSetting2.get('age'));
// profileSetting2.set('age',20);
// console.log(profileSetting2.get('address'));
// profileSetting2.set('address','Ha Noi');



// function createApp(){
//     const cars = [];
//     return {
//         add(car){
//             cars.push(car);
//         },
//         show(){
//             console.log(cars);
//         }
//     }
// }
// const app = createApp();
// app.show();
// app.add('BMW');
// app.show();
// app.add('Honda');
// app.add('Vin');
// const num = Number();
// console.log(num());
// function Number(){
//     let count = 0;
//     return increase;
//     function increase(){
//         return ++count;
//     }
//     // return increase
// }

// bai tap ap dụng kien thua ve setInterval và promise
// cach 1
// function countFrom(a,b){
//     return new Promise(function(resolve,reject){
//      var setIntervalID = setInterval(function(){
//      console.log(a);
//      ++a;
//      if(a>b){
//       clearInterval(setIntervalID);
//       resolve(); 
//      }
   
//     },100) 
      
//    })}
//    countFrom(1, 10)
// .then(function()
// {
//   console.log("done"); 
// })

// cách 2
// function count(a,b){
//     return new Promise(function(resolve,reject){
//         var setIdintervel = setInterval( function(){
//             ++a;
//             console.log(a);
//             if(a===b){
//                 clearInterval(setIdintervel);
//                 resolve();
//             }
//             },1000);
//     })
// }
// count(0,10).then(function(){
//     console.log("Done");
// })

//cach 3
// function count(a , b)
// {
// return new Promise(function(resolve, reject){
//   var intervalID = setInterval(function()
//   {
//     console.log(a); 
//     a++
//     if(a === b+1)
//     {
//       clearInterval(intervalID); 
//       resolve();
//     }
    
//   },100)
  
// })
// }


// count(1, 10)
// .then(function()
// {
//   console.log("done"); 
// })

// Cách 4
// function countFrom(min, max){
// 	return new Promise(function(resolve, reject){
// 		if(min > max){
// 			reject('error.....');
// 		}else{
// 			var dem = setInterval(function(){
// 				console.log(min++);
// 				if(min > max){
// 					clearTimeout(dem);
// 					resolve();
// 				}
// 			}, 1000)
// 		}
// 	});
// }

// countFrom(1, 10)
// 	.then(function(times){
// 		console.log('done');
// 	})
// 	.catch(function(error){
// 		console.log(error);
// 	});










//==========================bind==================
// var cat = {
//     name: 'Tom',
//     run: function(){
//         console.log(this.name+ ' running....');
//     }
// }
// // cat.run();
// var mouse ={
//     name: 'Jerry',
    // eat: function(){
        // console.log('Tom is eatting '+this.name);
    // }
// }
// var newCat = cat.run.bind(mouse);

// var newCat = mouse.eat.bind(mouse);
// newCat();

// var button = document.getElementById('smartBtn');
// var mouse = {
//     name: 'Mickey',
//     sayHello: function(){
//         alert('My name is '+this.name);
//     }
// };
// button.addEventListener('click', mouse.sayHello());

// function run(cb){

//     console.log('run.....');
//     cb();
// }
// var mouse ={
//     name: 'Jerry',
//     sayHi: function(){
//         console.log(this.name);
//     }
// };
// run(mouse.sayHi);

// var mouse = {
//     name: 'Jerry',
//     run: function(){
//         console.log(this.name+' Running....');
//     }
// };
// var cat = {
//     name: 'cat'
// }
// var newmouse = mouse.run.bind(cat);
// newmouse();

//  var array = [1,2,3,4];
//  console.log(array.reduce(function(x,y){return x*y;}));
//  console.log(array.map(x=>x*x));


// var a = {
//     name: 'foo',
//     run: function(){
        
//         setTimeout(()=>{
//             console.log(this.name);
//         },200);
//     }
// };
// a.run();

// var a = {
//     name: 'aAAA',
//     run:function(){
//         // var that = this;
//         var run2 = ()=>{
//             // var that = this;
//             console.log(this.name);
//         };
//         run2();
//     }
// };
// a.run();


// var person = {
//     name: 'Nam',
//     act:function(){
//         var that = this;
//         setTimeout(function(){
//             console.log(that.name);
//         },200);
//     }
// };
// person.act();
// var animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Fail' }
//   ];
  
//   for (var i = 0; i < animals.length; i++) {
//     (function(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }).call(animals[i], i);
//   }


// function sum(){
//     const num = Array.from(arguments);
//     const number =  num.reduce(function(a,b){
//         return a+b;
//     },0);
//     console.log(number);
// }
// // sum();

// // console.log(sum());

// function average(){
//     const x = sum.apply(null,arguments);
//     const y=  x/arguments.length;
//     console.log(y);
// }
// average(1,2,4,5);

// const name = 'Tom';
// const  cat = {
//     name,
//     run(){
//         console.log(`${this.name} is running`);
//     }
// };
// cat.run();

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         console.log('Eating...');
//     }
// }
// class bird extends Animal{
//     fly(){
//         console.log(this.name+' is flying...');
//     }
// }
// var chim = new bird('Thong');
// var pig = new Animal('Phuong')
// console.log(pig.name);

// class animal{
//     eat(){
//         console.log('Dong vat an co');
//     }
// }
// class tiger{
//     eat(cb){
//         console.log('tao la dong vat an thit');
//         cb();
//     }
// }
// var ho = new tiger();
// ho.eat(function(){
//         console.log('t ko thich an co');
// });

//===========super==========
// class Hero{
//     contructor(name,hp,damage){
//         this.name = name;
//         this.hp = hp;
//         this.damage = damage;
//     }
//     applyDamage(damage){
//         this.hp -= damage;
//     }
//     attack(enemy){
//         enemy.applyDamage(this.damage);
//     }
// }
// class RangHero extends Hero{
//     constructor(name,hp,damage,range){
//         super(name,hp,damage),
//         this.range = range;
//     }
//     sattack(enemy){
//         super.attack(enemy);
//         this.hp +=this.damage;
//     }
// }

// const heroA = new RangHero('A',100,10);
// const heroB = new Hero('B',200,5);
// console.log({heroA,heroB});
// heroA.attack(heroB);
// console.log({heroA,heroB});



// function sum(...rest){
// //    console.log(rest);
//     // console.log(arguments)
//     var x = rest.reduce((a,b)=>a+b);
//     console.log(x);
// }

// // sum();

// sum(1,2,3,4,7,5);




function sum (a,...b){
    console.log(b);
    var contact = b.join(a);
    console.log(contact);
}
sum('.','a','b','c','d');