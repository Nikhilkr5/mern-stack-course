// Number
// let a = 10;
// let b = 345.6821;
//console.log(b);
// let c = b.toFixed(2);  //345.68
// let c = b.toFixed(1);  //345.7      //it has rounded off
// console.log(typeof b.toFixed(1));   //string
// console.log(typeof c);     //string

//if i do :
// b.toFixed(1)    
//console.log(b);      //b will not get changed        //because of primitive data type(b ka data number hai jo ek primitive data type h)


// console.log(b.toPrecision(5));     //345.68
// console.log(b.toPrecision(4));      //345.7
// console.log(b.toString());        //mere pas number hai mai usko Strimg me convert kr skata hu toString ki help se




// hum number ko ek aur tareeke se create kr skte hai:::

// let a = new Number(20);    
// let b = new Number(20);

//console.log(a);      //Output:: [Number : 20]
//onscole.log(type of a);       //Output:: object

//Jab mai new Keyword use kr rha hu tab ye number to create kr rha h lekin wo usko as an Object le rha h
//lekin is method ka use hme nhi krna chahie ye bahut hi faltu method hai
//because : let's see---
// console.log(a==b);      //Output : false
//dekho yaha output to true ana chahiye tha lekin aya  false
//kyuki wo object hai
//aur object kaise compare hote hai :
//agar mujhe do object ko compaare krne hai to  wo dono ko dono ek hi value ko point out krne chaiiye
//un dono ke reference same hone chahiye reference me

//object reference me comparison krta hai

// console.log(Boolean(null));

// let b = 20;

// console.log(typeof b);

// let obj1 = {
//     name:"Rohit"
// }

// let obj2 = {
//     name:"Rohit"
// }
// console.log(obj1==obj2);   //false    


// let obj2 = obj1;   //dono ek hi object ke refernece ko point out kr rhe isliye
// console.log(obj1==obj2);   //true


// Non Primitive: Reference bases pe compare
// Primitive: Copy by value
// let a = 10;
// let b = a;

// console.log(a==b);



// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));
// console.log(Math.log10(20));
// console.log(Math.max(20,11,3421,12));
// console.log(Math.random());
// [0,1): It will generate value between 0 and 1, where 0 is included but 1 is not included


// Satebaaji ek game banata:(0-9)

// console.log(Math.floor(Math.random()*10)+1);

// console.log(Math.floor(Math.random()*6)+1);

// Math.floor(Math.random()*totalNumberOfOutcome)+shift


// 15-25


// console.log(Math.floor(Math.random()*11)+15)

// Math.floor(Math.random()*(max-min+1))+min

// OTP Generate: 4 digit: 1000-9999


// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);


