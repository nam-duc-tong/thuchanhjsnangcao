// var mydog={
//     name: 'Phuong',
//     weight: 5,
//     height: 11,
//     bak:function(){
//         console.log('Gau gau. Ten cua toi la: '+this.name);
//     },
//     eat:function(xuong){
//         this.weight = this.weight+xuong.nang;
//         return this;
//     }
// }
// mydog.bak();
// var xuong = {nang: 5}
// mydog.eat(xuong);
// console.log('xuong nang '+xuong.nang);
// console.log('can nang cua cho no sau khi an xuong la:  '+mydog.weight);

// var employee= [
//     {name: 'John',age:26},
//     {name: 'Nam',age:21},
//     {name: 'Thinh',age:28}
// ];
// employee.forEach(i => {
    // console.log(i);
// });
// for(i=0;i<employee.length;i++){
    // console.log(employee[i]);
// }
// var content= '';
// for(var person of employee){
    // i++;
    // content += '<li>'+person.name+'</li>'; 
    // console.log(person);
// }
// console.log(content);

// var content = '';
// var person = [
//     {name: 'John', age:15},
//     {name: 'Nam',age: 18},
//     {name: 'Maria',age:21}
// ];
// var count = 0;
// for(var i of person){
//     content += '<li>'+i.name+'</li>';
//     count ++;
// }
// document.write('So lan lap la: '+count);
// document.getElementById('contact-list').innerHTML = content;

// var person = {
//     chieucao: 5,
//     cannang: 10,
//     tuoi: 20,
//     dang: 'Ngon',
//     ten: 'Phuong'
// };
// for(var key in person){
//     // document.write(key+'  ', person[key]+'<br>');
//     document.write(key+'     ',person[key]+'<br>');
// }
// ================================================================
// call
// var coffmachine = {
//     making: function(onFinish){
//         console.log('Make coffee...');
//         onFinish();
//     }
// };
// var beep = function(){
//     console.log('tit tit');
// };  
// coffmachine.making(beep);
// coffmachine.making(function(){
//     console.log('Hoan thanh');
// });

// ==============================================================
// Map
// var number = [1,2,3,4,5];
// var sq = number.map(function(x){return x*x;});
// console.log(sq);

// var tamgiac = [
//     {
//         width: 10,height: 18
//     },
//     {
//         width: 19,height: 10
//     },
//     {
//         width: 10,height: 9
//     }
// ];
// var result = tamgiac.map(function(x){return x.width*x.height;});
// console.log(result);
// var tongdientichtamgiac= result.reduce(function(x,y){
//     return x+y;
// });
// console.log(tongdientichtamgiac);
// var dem = 0;
// for(var i of result){
//     dem++;
//     // console.log('hinh tam giac thu '+dem+' co dien tich la: '+i);
// }


//filter
// var numbers= [1,-1,2,3,-4,-7,-9];

// var num = numbers.filter(function(n){
//     return n%3 ==0;
// });
// // console.log(typeof num);
// console.log(num);
// for(var i in num){
//     console.log('phan tu thu '+i,' la: '+num[i]);
// }

// reduce

// var order = [
//     {name: 'bcs',quantity:2,price: 200},
//     {name: 'C',quantity:4,price: 200},
//     {name: 'B',quantity:3,price: 300}
// ];
// var result = order.map(function(x){return x.quantity*x.price}).reduce(function(sum,x){return sum+x});
// console.log('tong gia tien cua cac san pham la: '+result);

var users = [
    {name:'Tom',gender:'male'},
    {name: 'Maria',gender: 'female'},
    {name: 'jason',gender:'male'},
    {name:'Teo',gender:'male'},
    {name: 'sora',gender: 'female'},
    {name: 'json',gender:'female'}
];
var userList = $('#userList');
var genderFilter = $('#genderFilter');
render(userList,users);
genderFilter.on('change',function(){
    var selectedGender = this.value;
    var filteredUsers = users.filter(function(user){
        return user.gender === selectedGender;
    });
    render(userlist,filteredUsers);
});
function render(container,items){
    var htmlItems = items.map(function(item){
        return '<li class="list-group-item">'+item.name+'</li>';
    });
    var html = htmlItems.join('');
    container.html(html);
}