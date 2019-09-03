// bai 1
/*var x1={};
var x2="";
var x3=0;
var x4=false;
var x5=[];
var x6=/()/;
var x7= function () {

}
document.getElementById("demo").innerHTML=
    "x1: "+ typeof x1 +"<br>"+//new object
    "x2: "+ typeof x2 +"<br>"+//new string
    "x3: "+ typeof x3 +"<br>"+//new interger
    "x4: "+ typeof x4 +"<br>"+//new boolean
    "x5: "+ typeof x5 +"<br>"+//new array
    "x6: "+ typeof x6 +"<br>"+//new regexp object
    "x7: "+ typeof x7 +"<br>";//function

 */

//bai 2
 /*var x1 = 5 + 7;
document.getElementById("demo").innerHTML = x1.valueOf() + " " + typeof x1;//num 12
var x2 =5 + "7";
document.getElementById("demo").innerHTML = x2.valueOf() + " " + typeof x2;//string 57
var x3 ="5" + 7;
document.getElementById("demo").innerHTML = x3.valueOf() + " " + typeof x3;//string 57
var x4 = 5 - 7;
document.getElementById("demo").innerHTML = x4.valueOf() + " " + typeof x4;//num -2
var x5 = 5 - "7";
document.getElementById("demo").innerHTML = x5.valueOf() + " " + typeof x5;//num -2
var x6 = "5" - 7;
document.getElementById("demo").innerHTML = x6.valueOf() + " " + typeof x6;//num -2
var x7 = 5 - "x";
document.getElementById("demo").innerHTML = x7.valueOf() + " " + typeof x7;// NAN ko phai so'
 */

 //bai 3
/*var x;
//x = (0 == "");//true
//x = (1 == "1");// true
//x = (1 == true);//true
//x = (0 === "");//false
//x = (1 === "1");// false
//x = (1 === true);//false

document.getElementById("demo").innerHTML= x;
 */

//bai 4
/*function myfunction(x,y) {
    if(y === undefined){
        y = 0;
    }
    return x * y;
}
document.getElementById("demo").innerHTML=myfunction(4);
 */

// bai 5
/*var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thurday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "unknown";
}
document.getElementById("demo").innerHTML= "Today is "+ day;
 */

//bai 6
/*
var x = 0;
document.getElementById("demo").innerHTML= Boolean(x == 10);//false
 */
// bai 7
/*var x = 0;
document.getElementById("demo").innerHTML= Boolean(x = 10);//true
*/

//bai 8
/*var x = 0;
document.getElementById("demo").innerHTML= Boolean(x = 0);//false
 */

// bai 9
/*var x= 10;
switch (x) {
    case 10: alert("hello")// just hello not display
}
 */
/*var x= 10;
switch (x) {
    case "10": alert("hello")// dont display anything
}
 */
/*document.getElementById("demo").innerHTML = " hello " +
    world";
    //" hello " +
//     world"; dont display anything
//" hello \
//     world"; hello world
 */

// bai 10
/*document.getElementById("demo").innerHTML= myfunction(50);
function myfunction(a) {
    var power = 10;
    return a * power;
}
 */

// bai 11
/*var person = [];
person[0] = "john";
person[1] = "Doe";
person[2] = 46;
document.getElementById("demo").innerHTML = person[0] +" "+ person.length;
 */

// bai 12
/*var ojb;
ojb = document.getElementById("demo").innerHTML = "hello world";
 */

//bai 13
/*function myfunction() {
    var str = "    hello world     ";
    alert(str.trim());
}
 */

// bai 14
/*function myfunction() {
    var fruit =["mango","banana","orange","apple"];
    var x = document.getElementById("demo");
    x.innerHTML = Array.isArray(fruit);// test an array is array
}
 */
/*var fruit =["mango","banana","orange","apple"];
var a = fruit.indexOf("apple");// var a = fruit.lastIndexof("apple"); is the same indexof but search from the end of the array
document.getElementById("demo").innerHTML = "apple is found in position "+ (a + 1);
//find position of an element of an array
 */

//bai 15
/*var txt ="";
var num = [45,4,9,16,25];
num.forEach(myfunction);
document.getElementById("demo").innerHTML = txt;
function myfunction(value) {
    txt = txt + value + "<br>"; //call function for each array element
}
 */

// bai 16
/*var num1 =[1,2,3,4,5];
var num2 = num1.map(myfunction);
document.getElementById("demo").innerHTML = num2;
function myfunction(value,index,array) {
    return value * 2;
}// create a new array by performing a function on each array element
 */

//bai 17
/*var num1 =[12,25,46,15,100];
var over18 = num1.filter(myfunction);
document.getElementById("demo").innerHTML = over18;
function myfunction(value,index,array) {
    return value > 18;//create a new array with all array element that passes over 18
}
 */

//bai 18
/*var num1 =[12,25,46,15,100];
var over18 = num1.reduce(myfunction);
document.getElementById("demo").innerHTML = "the sum is "+ over18;
function myfunction(total,value,index,array) {
    return total + value;//find the sum of all numbers in an array
}
 */

//bai 19
/*var num1 =[12,25,46,15,100];
var over18 = num1.reduceRight(myfunction);
document.getElementById("demo").innerHTML = "the sum is "+ over18;
function myfunction(total,value) {
    return total + value;//find the sum of all numbers in an array by reduceRight
}
 */

//bai 20
/*var num1 =[12,25,46,15,100];
var allover18 = num1.every(myfunction);
document.getElementById("demo").innerHTML = "the sum is "+ allover18;
function myfunction(value,index,array) {
    return value > 18;//find all array values pass over 18
}
number.some(myfunction)// some values over 18 is true
 */

//bai 21
/*var txt ='{"name": "john", "age":30,"city":"new york"}'
var obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.city;
//create object from json string
 */
/*var txt ='{name: john, age: 30,city: new york}'
var myjson = JSON.stringify(txt);
document.getElementById("demo").innerHTML = myjson;// return "{name: john, age: 30,city: new york}"
 */
/*var person = {
    firstname : "Nguyen",
    lastname : "Hoang",
    get fullname(){
        return this.firstname + " " + this.lastname;
    }
};
document.getElementById("demo").innerHTML = person.fullname;
//creates a getter for a property called fullname
 */

/*var person ={
  firstname : "Nguyen",
  lastname : "Hoang",
    language : "No",
    get lang(){
      return this.language;
    },
    set lang(value){
      this.language = value;
    }
};
person.lang = "en";
document.getElementById("demo").innerHTML = person.lang;
//creates a setter and a getter for language property
 */

// creates a object
/*var person = {
    firstname: "Nguyen",
    lastname: "Hoang",
    language: "No",
};
//change property by ES5 new object method
Object.defineProperty(person,"language",{
   value: "En",
   writable: true,
   enumerable: true,
   configurable: true
});
//enumerate properties
txt ="";
for(var x in person) {
    txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
 */

//creates a object
/*var person = {
    firstname: "Nguyen",
    lastname: "Hoang",
    language: "No",
};
//change property by ES5 new object method
Object.defineProperty(person,"language",{
  get : function () {return language},
    set : function (value) {language = value.toUpperCase()}
});
//change language
person.language = "en";
// display language
document.getElementById("demo").innerHTML = person.language;
//change property of person
 */
