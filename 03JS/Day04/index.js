// Operator
// Arithmetic 

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);
// // Reminder
// console.log(5**3);

// Assignment operator

// let x = 20;
// let y = 10;
// x = x+y;
// x = x-y;
// x = x*y;
// x+=y;
// x = x+y;
// x%=y;
// console.log(x);


// comparison operator
// let x = 20;
// let y= 10;

// console.log(x>y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x<=y);
// console.log(x==y);
// console.log(x===y);

// type check(dono same type ke hone chaiye ===, uske baad wo comparison)

// number and string compare(string convert number)
// String--> Number
// let z = "120";
// let a = Number(z);

// console.log(a);
//console.log(typeof a);
// NaN: Not a number(Type of it is number)

// let a = "121ac";
// let b = Number(a);
//console.log(b);         //Nan
// console.log(typeof b);

//console.log(0/0);   //Nan

// let a = true;
// console.log(Number(true));
// console.log(Number(false));

// console.log(Number(null));         //0
// console.log(Number(undefined));   //Nan

// null--> 0
//  undefined-->NaN

// Number -> String
// let a = 10;
// let b = String(a);

// console.log(typeof b);
// "true"
// true

//console.log(String(true));   //true
// console.log(type of String(true));   //this true will be the string not boolean

////console.log(String(undefined));  //undefined
// console.log(typeof String(undefined));

//console.log(String(null));   //null



// Boolean convert karunga
// console.log(Boolean(10));  //true       //jo v aapke existing value hai, wo sab apko true degi, 1, 2,3,4 ya negative wo sab apko true degi 
// console.log(Boolean(-10));  //true
// console.log(Boolean(0));     //false      //sirf 0 hi false dega
// console.log(Boolean("Hello world"));         //true
// console.log(Boolean(""));                    //false kyuki empty string h
// console.log(Boolean(null));    //false
// console.log(Boolean(undefined));    //false



// computer science challenge
// let a = 0.1;
// let b = 0.2;

// let c = a+b;

// console.log(c);
//console.log(c==0.3);    //false       //problem in javascript




// 1: null is loosely equal to undefined only

// console.log(null==undefined);   //true
// console.log(null===undefined);   //false
// console.log(null==0);     //false
// console.log(null=="");    //false
// console.log(null==false);    //false
// console.log(null==true);      //false

// >,<,>=,<= (null --> number, undefined --> NaN)         //jab ye operators honge to apka type conversion ho jayega

// console.log(null>=0);      //true
// console.log(null<=0);      //true
// console.log(null>0);       //false
// console.log(null<0);        //false
// console.log(null>=undefined);        //false
// console.log(undefined>=0);            //false

// console.log("Rohit">"Rahit");       //true      //ye value by value compare krega
//console.log("Rohit">"Mohit");        //true

//by comparing the ascii value
// Because 'R' > 'M', JavaScript immediately evaluates the expression as true without
// needing to check the rest of the characters.


//console.log(10>=true);      //true
// console.log(10<true);      //false

// Ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se
// Dono number mein convert honge   fir comparison hoga

// console.log(null>="");    //true


// console.log(NaN == NaN);     //false



// loop kaise kaam karte hai:::

// for loop

// post increment
// post decrenment : i--

// for(let i = 0; i<10;i++){
//     console.log(i);
// }

// while loop

// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// }


// do while

// let i= 0;

// do{
//     console.log(i);
//     i++;
// }while(i<10);


// if else condition

// let age = 25;

// if(age>=18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not eligible for vote");
// }


// kid young and old


// let age = 78;

// if(age<18){
//     console.log("Kid");
// }
// else if(age>=60){
//     console.log("Old");
// }
// else{
//     console.log("young");
// }



// Logical Operator

// logical And&& , || 

// console.log(true&&true);         //true
// console.log(true&&false);        //false
// console.log(false&&false);        //false
// console.log(false&&true);          //false

// console.log(true||true);          //true
// console.log(true||false);          //true
// console.log(false||false);            //false
// console.log(false||true);            //true

// let a = "Rohit";
// let b = "Mohit";
// let c = a&&b; 
// console.log(c);    //Mohit


// let a = "";
// let b = "Mohit";
// let c = a&&b; 
// console.log(c);        //Output:            //kuchh v nhi ayega

// let a = "Rohit";
// let b = "";
// let c = a&&b; 
// console.log(c);       //Output:            //kuchh v nhi ayega

// let a = 0;
// let b = 20;

// console.log(a&&b);       //0
// &&: If first value is false, it will return the first value itself
// If first value is true, it will return second


// || logical or

let a = 0;
let b = 20;

console.log(a||b);
// &&: If first value is true, it will return the first value itself
// If first value is false, it will return second


// !=
// console.log(4!=5);         //true
// console.log(5!=5);        //false


// AND: & , | or

// console.log(2&5);
// console.log(2&3);

/*
// Bitwise AND (&)
// Compare binary bits:
// 1 & 1 = 1
// Otherwise = 0

// Example:
// 2 = 010
// 3 = 011
//     ---
//     010 = 2
console.log(2 & 3); // 2

// 2 = 010
// 5 = 101
//     ---
//     000 = 0
console.log(2 & 5); // 0
*/
