
 var fs = require('fs');
 var readlineSync = require('readline-sync');

 var students = [];
 var student = {};
 var att = true;
 while(att){
     var questions = 'Your question: \n1.Show all students\n2.Create a new students\n3.Save & exit';
     console.log(questions);
     var answer = parseInt(readlineSync.question('Choose your qustion: '));
     switch(answer){
        case 1:
            console.log(fs.readFileSync("data.JSON","utf8"));
            break;
        case 2:
            var name = readlineSync.question('Your name: ');
            var age = readlineSync.question('Your age: ');
            var yourclass = readlineSync.question('Your class: ');
            student.name = name;
            student.age = age;
            student.class = yourclass;
            students.push(student);
            console.log('-------Add a new student successfull-----------');
            break;
         case 3: 
            var students = JSON.stringify(students);
            var save = fs.writeFileSync("data.JSON",students);
            console.log('Save successfull-----------');
            att = false;
            break;
        default: console.log('Choose 1 or 2 or 3. please!');
     }     
 }
