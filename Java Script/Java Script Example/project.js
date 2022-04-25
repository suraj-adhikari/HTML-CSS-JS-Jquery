
// // // VANILLA JAVA SCRIPT

// // // // // Sconsole.log("hello world");
// // // // var name=window.prompt("Enter your name");
// // // // console.log("Hello " + name);




// // // //  Function

// // // // function greet (FirstName ='John',LastName= 'Wick'){
// // // //     // console.log('Hello');
// // // //     return 'Welcome ' + " "+ FirstName +"  " +LastName;
// // // // }

// // // // console.log(greet('Suraj','Adhikari'));

// // // // // function Expression

// // // // let square= function(x){
// // // //     return x*x
// // // // };
// // // // console.log(square(2));



// // // // // Property method
// // // // let todo={
// // // //     add:function(){
// // // //         console.log("Add Todo...");},
// // // //     edit:function(id){
// // // //             console.log(`edit todo ${id}`);}
// // // //     }

// // // // todo.add();
// // // // todo.edit(22);



// // // // Loop

// // // // for( let i=0;
// // // //     i<10;
// // // //     i++){
// // // //         if (i==2){
// // // //             console.log('2 is great')
// // // //         }
// // // //         console.log('number' + i)}






// // // // let i=0;
// // // // while( i<10){
// // // //     console.log('number ' + i);
// // // //     i++;
// // // //     }


// // // // Do while ( it will run atleast once)
// // // let i=0;

// // // do{
// // //     console.log('number'+ i);
// // //     i++;
// // // }
// // // while(i<5);


// // // Using DOM

// // // let val;
// // // val = document;
// // // val= document.body;
// // // val= document.domain;

// // // val= document.forms[0];

// // // val=document.links;

// // // console.log(val);

// // // document.getElementById()

// // console.log(document.getElementById('task-title'));

// // // Get Things From Elements
// // console.log(document.getElementById('task-title').id);
// // console.log(document.getElementById('task-title').className);

// // // Change Style
// document.getElementById('task-title').style.background= '#333';
// document.getElementById('task-title').style.color= '#fff';

// // change text
// document.getElementById('task-title').textContent='Task List';
// document.getElementById('task-title').innerText = 'My Task'; 

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'))