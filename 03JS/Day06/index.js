// String
// const str1 = "Rohitboy";  ///isme problem ye hai ki sara ka sara ek hi line me likhna parega  //agr next line me jateho to error
// const str2 = 'Rohit Negi';    //same problem here also  agar next line me string ko likhte ho ya le jate ho
// const day = 18;
// const str3 = `Strike is coming on ${day}`;     //ye modern tareeka hai string create krne ka 
//isme koi problem nhi hai

//const str3 = `Strike      //yaha no prolem agar next line v le jate ho
// is coming soon
// `;

// console.log(str1,str2,str3);

// console.log(str3);




// const str = `Hello Coder Army`;        //ye string immutable hai

// console.log(str.length)    //16     //spacesa re also counted because spaces are also special characters
// console.log(str[1]);    //mai single character ko v access kr skta hu    //Output:: H
//ye string immutable hai
// str[2] = "S";      //changing or editing not possible 
// console.log(str)     //no change in the string

// upper case me convert krne ke liye:::
//console.log( str.toUpperCase());
//note: ye upper case ka operation krne par original string  jo tha usme change nhi hua hoga , kyuki string immutable hai
//ek nyi string di jayegi hamesha
//prove::
//console.log(str);    //dekhon original string me kuuchh v channge nnhi hua hai


//lekin agar mai aise krta hu to ::
// const a = str.toUpperCase();        //uppercase me convert kiya , nayi string create hui  aur us nayi string ko a ke andar dala h
// console.log(a)   // to ye change(convert) hua hai



// const a = str.toUpperCase();
// const b = str.toLowerCase();    //now lower case me convert hoga
// console.log(b);     //string lower case me convert ho gya



// const str = `Hello Coder Army Coder`;

// console.log(str.indexOf('Cod'));
// console.log(str.lastIndexOf('Cod'));
// console.log(str.includes('cod'));

// slice 
// console.log(str.slice(2,7));
// console.log(str.slice(3));
// console.log(str.slice(-5,-2));

// const str = `Hello Coder Army Coder`;

// console.log(str.substring(2,5));

// const a = "Rohit";
// const b = "Negi";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Rohit");
// console.log(24+"Rohit"+10);
// console.log(24+30+"Rohit");

// const str = `Hello Coder Army Coder`;

// console.log(str.replaceAll("ode",'iam'));

// const user = "  Rohit  Negi ";
// console.log(user.trim());

// const names = "Rohit Mohit Suraj Rohan Anjali";

// console.log(names.split(" "))
// console.log(names.split(","))

// const now = new Date();

// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());


// Local time chal rha
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());


// days: Mon-tue(1 based)
// Month: 0 1

// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125);

// console.log(now.toString());


// Timestamp
const now = Date.now();
const dates = new Date(1759275037293);
// console.log(dates.toString());

console.log(dates);
console.log(now);
// 1759272851288: TimeStamp
