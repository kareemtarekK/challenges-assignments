let style = document.getElementById("ex");
style.style.color="blue";
style.style.fontSize="80px";
style.style.fontWeight="bold";
style.style.textAlign="center";
style.style.fontFamily="Arial";
console.log("%cElzero %cWeb %cSchool",
'color:red;font-size:40px', 
`color:green; font-size:40px; font-weight:bold`,
"background-color:blue; font-size:40px; color:white;");
console.group("group one");
console.log("message one");
console.log("message two");
console.groupCollapsed("Child Group");
console.log("message one");
console.log("message two");
console.groupCollapsed("Child Group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group two");
console.log("message one");
console.log("message two");
console.groupEnd();
console.table(["kareem","anwar","belal","tarek","fayza"]);
// window.alert("stop");
console.log("Iam In Console");
document.write("Iam In Page");
// window.confirm("stop");
console.log("Iam In Console");
document.write("Iam In Page");
let numberOne=10;
let numbrTwo=20;
let result =numberOne+""+numbrTwo;
console.log(result);
console.log(typeof result);
console.log(`${numberOne}${numbrTwo}`);
console.log(`${typeof result}`);
console.log(numbrTwo+"\n"+numberOne);
console.log(`${numbrTwo}\n${numberOne}`);
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
console.log(`\`i'm in \n \\\\ \n love \\\\ """ ''' \n ++ with ++ \n \\\"""\\\""" \n""javascript""\`\``);
let a = 21;
let b = 20;
let reb=a+"_"+b;
console.log("_"+reb.repeat(4)+"_"); // _21_2021_2021_2021_20_
// Replace ? With Arithmetic Operators
console.log((10 + 20 ) * (15 % 3) * (190 + 10 + 400)); // 0
let num = 3;
console.log(num + num); //6
console.log(num - -num); //6
console.log((num * num ) - num); //6
console.log((num ** num )-((num*num)+(num*num)+num)); //6
console.log((++num + num + +true)- --num); //6
console.log(num +(+true)*num); //6
let n ="10";
let x =Number(n);
console.log(x + x); //20
console.log(x - -x); //20
console.log((x % --x) + x + x + +true); //20
console.log(++x + x); //20
console.log((x / x) + --x + x + +true); //20
let points = 10;
console.log(points + true +true +true); //13
console.log((points - (points / 2)) +(points % ((points / 2) + +true + +true))); //8
console.log(100000);
console.log(1e5);
console.log(5e4 + 5e4);
console.log(1_000_00);
console.log(1000_00);
console.log(10 ** 5);
console.log(10 * 10 * 10 * 10 * 10);
console.log(+(1 + ("0").repeat(5)));
console.log((10 ** 10) / (1e5));
console.log((1e6)-(9e5));
console.log(((10*10)**2)*10);
console.log(((true + true + true + true + true ) * 10000) * 2);
console.log((true + true + true + true+ true + true + true + true + true + true) ** 5 );
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
let s = Number.MAX_SAFE_INTEGER;
console.log(s.toString().length); //16
console.log(`${Number.MAX_SAFE_INTEGER}`.length); //16
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
let num3 = 10;
console.log(Number.isInteger(num3) + Number.isInteger(num3)); // 2
let flt = 10.4;
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(parseInt(flt)); // 10
console.log(parseInt(5*Math.random())) // 0 || 1 || 2 || 3 || 4
console.log(Math.ceil(Math.random()*4)); // 0 || 1 || 2 || 3 || 4
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLocaleLowerCase()); // e
console.log(userName.split("",1)[0].toLocaleLowerCase()); // e
console.log(userName.substring(0,1).toLocaleLowerCase()); // e
console.log(userName.substr(0,1).toLocaleLowerCase().repeat(3)); // eee
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ,0)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase(),0)); // True
console.log(word.endsWith(letterO.toLocaleLowerCase(),6)); // True
console.log(100 !== "100"); // true
console.log(100 < 1000); // true
console.log(110 < (100 + 10 + 20)); // true
console.log(-10 == "-10"); // true
console.log(- -50 > +"-40"); // true
console.log( +10 < -"-40"); // true
console.log(+"10" === 10); // true
console.log( -20 < false); // true
let num5 = 10;
let num6 = 20;
console.log(num5 < num6); // true
console.log(num6 > num5); // true
console.log(num5 != num6); // true
console.log(Number.isInteger(num5)); // true
console.log((num6 / num5) == (true + true )); // true
console.log(!Number.isNaN(num5)); // true
let q = 20;
let rb = 30;
let cr = 10;
console.log(q < rb && q > cr || q > rb); // true
console.log(q < rb || q === cr); // true
console.log(!(q == rb) && !(q > rb) && !(q < cr) && !(q == cr)); // true
// Test Case 1
let num10 = 9; // "009"
if(num10<10)
console.log("'009'");
// Test Case 2
let num11 = 20; // "020"
if(10<num11<100)
console.log('"020"');
// Test Case 3
let num13 = 110; // "110"
if(num13>=100)
console.log(num13);
let num50 = 9;
let str = "9";
let str2 = "20";

if(num50 !== str)
{
    console.log(`"{num1} Is Same Value As {str}"`);
}
if(num50 == str)
{
    console.log('"{num1} Is The Same Value As {str} But Not The Same Type"');
}
if( num50 !== str2)
{
    console.log(`"{num1} Is Not The Same Value Or The Same Type As {str2}"`);
}
if(str != str2)
{
    console.log(`"{str} Is The Same Type As {str2} But Not The Same Value"`);
}
// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
let num99 = 10;
let num999 = 30;
let num99999 = "30";
if(num99999 > num99 && num99999 !== num999){
    console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"`);
    if(num99999 > num99 && num99999 == num999){
        console.log(`"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"`);
    }
    if(num99999 !== num99 && num99999 !== num999)
    {
        console.log(`"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"`);
    }
}
// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// switch //
let day ="   friday  ";
day =day.trim();
day=day.charAt(0).toUpperCase() + day.slice(1);
switch(day){
    case "Friday":
    case "Saturday":
    case "sunday":
        console.log("No Appointments Available");
    break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
    break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
    break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
    break;
    case "World":
        console.log("Its Not A Valid Day");
    break;
    default:
    console.log("your day has an error");               
}
// Edit What You Want Here
let i1 = "1";
let i2 = .5;
let i3 = "1";
let i4 = 31.5;
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/
// Condition 1
if (i1 > i2) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2
if (i1 > i2 && i1 < i4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 3
if (i1 > i2 && i1 === i3) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 4
if ((i1 + i2) < i4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 5
if ((i1 + i3) < i4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 6
if ((i1 + i2 + i3) < i4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 7
if (i4 - (i1 + i3) + i2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
let kareem="kareem tarek anwar" 
console.log(kareem.lastIndexOf("a",12)); //8
let kareemt="kareem tarek anwar";
console.log(kareemt.indexOf("k",5)); //11
console.log(kareemt.lastIndexOf("e",12)); //10
let vvv=false;
console.log(vvv??200); // false (nullish coalsing operator)
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num00 = 3;
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
myFriends[num00]="Gamal";
myFriends.splice(3,1)
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
///////////////////////////////////////////////
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]
//////////////////////////////
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArrc = [];
let total = finalArrc.concat(arrOne,arrTwo).sort().reverse();
console.log(total); // ["Z", "X", "D", "C", "B", "A"]
////////////////////////
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[2][0].slice(2).toUpperCase()); // ZERO
///////////////////////////////////////////////////
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if(haystack.includes(needle,0)){
  console.log("Found");
}
if(haystack[1]===needle){
  console.log("Found");
}
if(haystack.slice(1,2).join() === needle){
  console.log("Found");
}
///////////////
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
let total2=allArrs.concat(arr1,arr2).sort().join("").slice(4,7).toLowerCase();
console.log(total2); // fxy
let products=["iphone",'tablat',"mac","lab","phone"];
let colors=["red","green","blue",];
let count = 3;
document.write(`<h1>show ${count} products</h1>`);
mainloop:for(let i=0;i<count;i++){
  document.write(`<div>`);
  document.write(`<h1>${products[i]}</h1>`);
  nestedloop:for(let j=0;j<colors.length;j++){
    if(colors[j]==="blue"){
      break nestedloop;
    }
    document.write(`<p>-${colors[j]}</p>`);
  }
  document.write(`<span>${colors.join(" | ")}</span>`);
  document.write(`</div>`);
}
//////
for(let i=0;i<3;i++){
  console.log(products[i]);
}    // anothER shape
let i =0;
for(;;){
  console.log(products[i]);
  i++;
  if(i>2){
    break;
  }
}     /// using while
let u=0;
while(u<=2){
  console.log(products[u]);
  u++;
}    //using dowhile
let d=0;
do{
  console.log(products[d]);
  d++;
}while(d<=2) 
//// an example for showing number from 10 to 15 using 10 to 20
function showNumber(start,end){
  for(let s=start; s<=end; s++){
    document.write(`<p>${s}</p>`);
    if(s===15){
      break;
    }
  }
}
showNumber(10,20);
/// function default parameters (there are different way to do default parameter)
function Info(userName,age){
  age = age||"unknownn";   //ternary operator
  console.log(`hello ${userName} your age is ${age}`);  // first
}
Info("kareem",);
/////
function Info(userName,age){
  if(age===undefined){
    age="unknown";          // if statement
  }q
  console.log(`hello ${userName} your age is ${age}`);  // second
}
Info("kareem");
////
function Info(userName="unknown",age="unknown"){    // Es6
  console.log(`hello ${userName} your age is ${age}`);   // third
}
Info("kareem");
////////
let start2=10;
let end2 =100;
let excude=40;
for(let y=start2;y<=end2;y+=10){
  if(y===40){
    continue;
  }
  console.log(`${y}`);
}
let z=10;
let h=0 ;
let stop=3; 
for(let g=z;g>h;g--){
  if(g<3){
    break;
  }
  if(g<10){
    g=`${h}${g}`
  } 
  console.log(`${g}`);
}
////
let start3=1;
let end3=6;
let breaker=2;
for(let o=start3;o<=end3;o++){
  console.log(`${o}`);
  console.log(`-- ${breaker}`);
  console.log(`-- ${end3 - breaker}`);
}
//////
let index = 10;       //inilition
let jump = 2;
for (;;) {
  console.log(index);
  index -=2;          //  step
  if(index<4){        //  condition
    break;
  }
}
////
let friendds = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let con = letter.length;
for(let bb=letter.length - letter.length;bb<friendds.length;bb++){
  if(friendds[bb][true - true]===letter.toUpperCase()){
   continue;
  }
  console.log(`" ${con++} => ${friendds[bb]}"`);
}
////////////
let start4 = 0;
let res="";
let swappedName = "elZerO";
for(let vv=start4;vv<swappedName.length;vv++){
  if(swappedName[vv]===swappedName[vv].toLowerCase()){
    res +=swappedName[vv].toUpperCase();
  }
  else{
    res +=swappedName[vv].toLowerCase();
  }
}
console.log(res);
////////
let start5=0;
let mix = [1,2,3,"A","B","C",4];
for(let c =start5+ mix.indexOf(2,0);c<mix.length;c++){
  if(typeof mix[c]==="string"){
    continue;
  }
  console.log(mix[c]);
}
///////////
let myarray=["Ahmed","Sayed","Ali", 1 , 2 ,"Mohamed","Amany"];
let index2=0;
let counter=0;
while(index2<myarray.length){
  if(typeof myarray[index2]==="string" && myarray[index2][counter]!==myarray[counter].charAt(0)) {
    console.log(myarray[index2]);
  }
  index2++;
}
/////////////////////
function sayHello( name,gender){
  if(gender==="male"){
    console.log(`hello mr ${name}`);
  }
  else if(gender==="female"){
    console.log(`hello miss ${name}`);
  }
  else{
    console.log(`hello ${name}`);
  }
  }
  sayHello("kareem","male");
  sayHello("mona","female");
  sayHello("kareem");
  //////////////
  function calaculate(number1,number2,operation){
    switch(operation){
      case "add":
        console.log(`the sum is ${number1 + number2}`);
        break;
      case "subtract":
        console.log(`the subtract is ${number1 - number2}`);
        break;
      case "multiply":
        console.log(`the multiply is ${number1 * number2}`);
        break;
    }
    if(number2===undefined){
      console.log(`there is no number two you should enter it`);
    }
    else if(operation==undefined){
      console.log(`the sum is ${number1 + number2}`);
    }
  }
  calaculate(5,5,"add");
  calaculate(3,3,"multiply");
  calaculate(9,9,"subtract");
  calaculate(3,5);
  calaculate(3);
  //////////////////
function thetime(age){
if(age>10 && age<100){
console.log(`your age in months is ${age * 12}`);
console.log(`your age in weeks is ${age * 12 * 4}`);
console.log(`your age in days is ${age * 12 * 4 * 7}`);
console.log(`your age in hours is ${age * 12 * 4 * 7 * 24}`);
console.log(`your age in minutes is ${age * 12 * 4 * 7 * 24 * 60}`);
console.log(`your age in seconds is ${age * 12 * 4 * 7 * 24 * 60 * 60}`);
}
else{
  console.log("the age is out of the side");
}
}
thetime(110);
////////////////////
let admins=["Ahmed","Anwar","Tarek","Fayza","Kareem","Belal","stop","Mona"];
let employees=["Akram","Tawfek","Karm","Bo`sy","Fared","Ahmed","Kareem","Fayza","Belal","Tarek"];
let importsa;
let cont=1;
let cont2=1;
for(let i=0;i<admins.length;i++){
importsa=admins.indexOf("stop");
}
document.write(`<h1>coumpany has ${importsa - 1} admins</h1>`);
document.write(`<hr>`);
for(let i =0;i<importsa-1;i++){
  document.write(`<div>`);
  document.write(`<div>the admin for team ${cont} is ${admins[i]} </div>`);
  cont++;
  document.write(`<h3>Team Member</h3>`);
  for(let j=0;j<employees.length;j++){
    if(employees[j].charAt(0)===admins[i].charAt(0)){
      document.write(`<h5>-- ${cont2} ${employees[j]}</h5>`);
      cont2++;
    }
  } 
  document.write(`</div>`);
}
///////////
let ggg=0;
function add(...numbers){
for(let i=0;i<numbers.length;i++){
  ggg+=numbers[i];
}
console.log(`the sum is ${ggg}`);
}
add(10,20,30,40,50,60,70,80,90,100);
/////////////////
function sho(us="unknown",ag="unknown",rt=0,show="yes",...skills){
  document.write(`<h1>welcome : ${us}</h1>`);
  document.write(`<h1>the age : ${ag}</h1>`);
  document.write(`<h1>the rate : ${rt}$</h1>`);
  if(show==="yes"){
    if(skills.length>0){
      document.write(`<h1>your skill are : ${skills.join(" | ")}</h1>`);
    }
    else{
      document.write(`<h1>your skills are 0</h1>`);
    }
  }
  else{
  document.write(`<h1>skills are hidden</h1>`);
  }
}
sho("kareem",21,30,"yes","html","css","js","react","vue");
///////////////
function text(j,k){
  function update(){
    message="hello";
    function name(){
      return `${j} ${k}`
    }
    return message + ` ` +  name();
  }
  return update()
}
console.log(text("kareem","tarek"));
////////////////
function checkStatus(_a, _b, _c) {

}
checkStatus()
/////
function createSelectBox(startYear, endYear) {
  console.log(`<select>`);
  for(let i=startYear;i<=endYear;i++){
    console.log(`<option value="${i}">${i}</option>`);
  }
  console.log(`</select>`);
}
createSelectBox(2000, 2021);
////////////////
let yyy=1;
function multiplys(...numberss){       //rest parameter
for(let h=0;h<numberss.length;h++){
  if(typeof numberss[h]==="string"){
    continue;
  }
  else if(Number.isInteger(numberss[h])===false){
    yyy *= parseInt(numberss[h]);
  }
  else if(Number.isInteger(numberss[h])===true){
     yyy *= numberss[h]; 
  }
}
return yyy;
}
console.log(multiplys("kareem",10.3,5.3,10,30,50));
/////////////////////
function getdetails(name , age , country){
  function namepatern(){
    // let dd="";
    // for(let i=0;i<name.length;i++){
    //   if(name.charAt(i)===" "){
    //     dd+=name[i];
    //     i++;
    //     dd+=name[i];                          // this is another way
    //     break;
    //   }
    //   dd+=name[i];
    // }
    // return dd;
    return `${name.slice(0,name.indexOf(" "))}${name.substr(name.indexOf(" "),2).toUpperCase()}`
  }
  function agepatern(){
    return `your age is : ${parseInt(age)}`;
  }
  function countrypatern(){
    return `you live in : ${country.slice(0,2).toUpperCase()}`
  }
  function alldetails(){
    return `hello ${namepatern()}. , ${agepatern()} , ${countrypatern()}`
  }
  return alldetails()
}
console.log(getdetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getdetails("kareem Tarek","21 is my age","syria"));
console.log(getdetails("sayed salem","30 is my age","england"));
//////////////////////
function itsMe() {
  return `Iam A Normal Function`;  // regular function
}
console.log(itsMe());
let itsMes=()=>{
  return "Iam A Arrow Function"
}                                  //arrow function
console.log(itsMes());
function urlCreate(protocol, web, tld) {           // https://www.elzero.org
  return `${protocol}://www.${web}.${tld}`;   
}                                                    // regular function
console.log(urlCreate("https", "elzero", "org"));
let webcreate=(pro,we,tl)=>{
  return `${pro}://www.${we}.${tl}`
}                                                    //arrow function
console.log(webcreate("https","elzero","org"));
// //////////////
// console.log("/".repeat(100))
// let rs=0;
// function specialmix(...numbersss){
//   for(let i=0;i<numbersss.length;i++){
//     if(typeof numbersss[i]==="number"){
//       rs+=numbersss[i];
//     }
//     else if(typeof numbersss[i]==="string"){
//       if(parseInt(numbersss[i])===NaN){
//         console.log("all is string");
//       }
//       else{
//         if(parseInt(numbersss[i])===NaN)
//         {
//           continue
//         }
//         else{
//           rs+=parseInt(numbersss[i]);
//         }
//       }
//     }
//   }
//   console.log(rs);
//   rs=0;
// }
// specialmix(110,200,310010)
// specialmix("fg","kjafg","df")
//  highr order function ... the higher order function is function that accept
//  function as a parameter and can return function.
//  (map)   (filter)   (reduce)    (forEach)
//  map / is a higher order function that accept two parameter 
//  the first is call back function that accept three parameter (element , index , array)
//  the second is this argument
//  some example about map.s
//  an example to add each element of array on itself.
let arrnumber=[10,20,30,40,50];
let newarray=[];
for(let i=0;i<arrnumber.length;i++){
  newarray.push(arrnumber[i] + arrnumber[i]);
}
console.log(newarray);
// using map
let newarray2=arrnumber.map(function(ele,index,array){
  console.log(ele);
  console.log(index);
  console.log(array);
  console.log(ele + ele)
  console.log("#".repeat(10));
  return ele + ele;
},10)
console.log(newarray2);
function addtion(ele){
  return ele + ele 
}
let fff= arrnumber.map(addtion);
console.log(fff);
// sweap word
let wo="ELzerO";
let ope=wo.split("").map((ele)=>{
  return ele===ele.toUpperCase()? ele.toLowerCase():ele.toUpperCase();
},`thisargument`).join("");
console.log(ope);
// convert number
let nm=[10,20,30,-40,-50,-100];
let mn=nm.map(function(ele,index,array){
  return -ele;
})
console.log(mn);
//ignore number value
let po="elz123456789ro";
let newpo=po.split("").map((ele)=> isNaN(parseInt(ele))? ele:""
,`thisargument`).join("");
console.log(newpo);
// filter is like mao but it is different from map in using
// like filter using when the user need to filter the data and return what user need
// the structure for filter is (call back function(element , index, array),thisargument)
// some example using filter
// to return even numbers two different way
// using for loop
let jjj=[1,2,3,4,5,6,7,8,9,10];
let newjjj=[];
for(let i=0;i<jjj.length;i++){
  if(jjj[i] % 2 !==0){
    continue;
  }
  newjjj+=jjj[i] + "!";
}
console.log(newjjj);
// using filter
let filterjjj=jjj.filter(function(ele,index,array){
  return ele %2 === 0;
},10)
console.log(filterjjj);
// example on filter
let talk=["anwar","kareem","belal","fayza","tarek","ashor","aser"];
let yyyyy=talk.filter(function(ele,index,array){
  return ele.startsWith("a");
},50);
console.log(yyyyy);
// example on filter
let sentence="i love foood code to playing much";
let newsentence=sentence.split(" ").filter(function(ele,index,array){
  return ele.length <= 4;
},3).join(" ");
console.log(newsentence);
// example on filter
let fil="elz123ro";
let newfil=fil.split("").filter((ele,index,array)=>{
  return isNaN(parseInt(ele));
},5)
console.log(newfil.join(""));
//example on map width filter
let mixv="a123mnkj";
let newmix=mixv.split("").filter((ele,i,arr)=>{
  return !isNaN(parseInt(ele))
},6).reduce((accumlator,current,index,array)=>{
 return (accumlator) * (current);
},9);
console.log(newmix);
// reduce is used when needing result from operation 
// srtucture is reduce(call back function(accumlator,current,index,array),initialvalue);
let numm=[10,20,30,40,50,60,70,80,90,100];
let newnumm=numm.reduce((acc,cur,i,arr)=>{
  console.log(acc);
  console.log(cur);
  console.log(i);
  console.log(arr);
  console.log(acc+cur);
  console.log("###########################");
  return acc+ cur;
})
console.log(newnumm)
// example on reduce
let yu=["e","@","l","@","@","z","e","r","@","o"];
let newyu=yu.filter((ele,i,arr)=>{
  return ele!=="@";
}).reduce((acc,cur,i,arr)=>{
  return `${acc}${cur}`;
});
console.log(newyu);
//example on reduce
let big=["other","bla","propaganda","uuu","playing"];
let newbig=big.reduce(function(acc,cur,i,arr){
  return acc.length>cur.length ? acc : cur;
})
console.log(newbig);
// forEach
function removeEveryOther(arr){
//   let newarr=[];
//   for(let i=0;i<arr.length;i++){
//     if(i%2!==0){
//       continue;
//     }
//     newarr.push(arr[i]);
//   }
//   return newarr;  
  let newarr=arr.filter((ele,index,array)=>{
    return index%2===0
  },6);
  return newarr;
}
console.log(removeEveryOther(["keep","remove","keep","remove","keep"]))
let obj={
  name:"kareem",
  age:21,
  addresses:{
    ksa:"ryad",
    egypt:{
      one:'cairo',
      two:'alex',
      three:'man',
    },
  },
  ava:true,
  method:function(){
    if(this.ava===true){
      return "found";
    }
    else{
      return 'not found';
    }
  }
}
console.log(obj.method());
let user=new Object({a:3});
console.log(user);
let help={
  salary:100,
  funct:function(){
    console.log(this.salary*2);
  }
  }
let user2=Object.create(help);
user2.salary=30;
console.log(user2.funct());
console.log(user2);
let user3=Object.assign({},{item:3});
console.log(user3);
let target=new Object({
  a:1,
  b:{
    c:3
  },
});
let source ={
  b:{
    c:9,
  },
  d:9,
  e:10,
}
let usr5=Object.assign(target,source);
target.a=90;
usr5.b.c=100000000;
console.log(source);
console.log(usr5);
/////////////////////////////////////////
console.log(this===window);
var g=10;
console.log(window.g);   // window scope drama.
console.log(this.g); 
document.getElementById("test").onclick=function(){
  console.log(this);   /////owner
}
const say={
  name:'kareem',
  tal:function(){
    console.log(`hello mr ${this.name}`);
  },
};
console.log(say.tal());
///// DOM document object model
let ex=document.querySelectorAll(".f");
console.log(ex[1]);
document.images[0].src="www.coogle.com";
document.images[0].title="photo";
document.images[0].alt="this is picture";
document.images[0].id="l";
document.images[0].className="one"
console.log(document.images[0]);
let test=document.getElementById("test");
console.log(test.getAttribute("class"));
test.setAttribute("class","new_value");
console.log(test.attributes);
console.log(test.hasAttribute("id"));
test.removeAttribute("id");
/// to create element by js
for(let i=0;i<10;i++){
let bbbbbb;
bbbbbb=document.createElement("div");
bbbbbb.className="product";
text5=document.createTextNode(`this is div ${i+1}`);
heading=document.createElement("h1");
bbbbbb.appendChild(heading);
texthead=document.createTextNode(`product-${i+1}`);
heading.appendChild(texthead);
para=document.createElement("p");
para.appendChild(text5);
bbbbbb.appendChild(para);
document.body.appendChild(bbbbbb);
console.log(bbbbbb);
}
let yj={
  name:"kareem",
  fun:function(){
    console.log(`hello ${this.name}`);
  }
}
let nn =Object.create(yj);
nn.name="belal";
console.log(nn.fun());
console.log(yj);
/////////////////////////////////////////////
const user_data={
  name:'kareem',
  age:21,
  country:'Egypt',
  total_information:function(){
    console.log(`my name is ${this.name} , and my age is ${user_data.age} , and 
    I live in ${this.country}`);
  },
};
console.log(user_data.name);
console.log(user_data.age);
console.log(user_data.country);
console.log(user_data.total_information());
//////////////////////////////////////
// there is multiway to create object ......
let objmethodone={
  properity:'method one',
};
console.log(objmethodone.properity);
let objmethodtwo=new Object({
  properity:'method two',
});
console.log(objmethodtwo.properity);
let objmethodthree=Object.create({
  properity:'method three'
});
console.log(objmethodthree.properity);
let objmethodfour=Object.assign({},{
  properity:'method four',
})
console.log(objmethodfour.properity);
////////////////
let at = 1;
let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};
let assign=Object.assign({},{at},threeNums,twoNums);
console.log(assign);
/////////// challenge
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};
let objcetlength=Object.keys(myFavGames).length;
for(let i=0;i<objcetlength;i++){
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);
  if( myFavGames[Object.keys(myFavGames)[i]]["bestThree"] !== undefined){
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]]['bestThree']['one']}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]]['bestThree']['two']}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]]['bestThree']['three']}`);
  }
  console.log('#'.repeat(50));
}
let div0=document.getElementById('kareem');
console.log(div0);
let div1=document.getElementsByClassName('element');
console.log(div1[0]);
let div3=document.getElementsByTagName('div')
console.log(div3[23]);
let div4=document.querySelector('.element');
console.log(div4);
let div5=document.querySelector('#kareem');
console.log(div5);
let div6=document.querySelectorAll('.element');
console.log(div6[0]);
let div7=document.querySelectorAll('#kareem');
console.log(div7[0]);
let div8=document.querySelector('div');
console.log(div8);
let div9=document.querySelectorAll('div');
console.log(div9[11]);
let div10=document.querySelector('[name = js]');
console.log(div10);
let div11=document.querySelectorAll('[name=js]');
console.log(div11[0]);
let div12=document.body.children[12];
console.log(div12);
let div13=document.body.childNodes[25];
console.log(div13);
///////////////////////////
















































