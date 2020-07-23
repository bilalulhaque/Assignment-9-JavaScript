// Chapter 1

// Question 1
alert("Hello User");

// Question 2
alert("Error! Please enter a valid password");

// Question 3
alert("Welcome to JS Land...\nHappy Coding!");

// Question 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Question 5
console.log("Hello... I can run JS through my web browser's console");


// Chapter 2

// Question 1
var username

// Question 2
var myName='Muhammad Bilal Ul Haque';

// Question 3
var message= "Hello World";
alert(message);

// Question 4
var name='Muhammad Bilal Ul Haque';
var age='20 years old';
var profession='Computer Scientist';

alert(name);
alert(age);
alert(profession);

// Question 5
var food='Pizza';

alert(food);
alert(food.slice(0,4));
alert(food.slice(0,3));
alert(food.slice(0,2));
alert(food.slice(0,1));

// Question 6
var email="bilalulhaque16@gmail.com";
alert("My email address is "+email);

// Question 7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

// Question 8
document.write("Yah! I can write HTML content through JavaScript");

// Question 9
var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);
document.write(str);

// Chapter 3

// Question 1
var age=20;
alert("I am "+age+" years old");

// Question 2
var a=1;
for(a=1; a>=1; a++){
alert("You have visited this site "+a+" times")
}

// Question 3
var birthYear=1999;
document.write("My birth year is "+birthYear+"<br>"+"Data type of my declared variable is "+typeof(birthYear));

// Question 4
var name="John Doe";
var quantity=5;
var product="T-Shirt";
document.write(name+" ordered "+quantity+" "+product+"(s)"+" on XYZ Clothing store");


// CHAPTER 4

// Question 1
var text;
var product;
var x;

// Question 2
var a;
var $text;
var apex;
var dell4;
var camelCase;

var 1x;
var !;
var ./;
var #12;
var 9aw;

// Question 3
document.write("Rules for naming JS variables"+"<br>"+"<br>")
document.write("Variable names can only contain numbers, $ and _. "+"For example: $my_1stVariable"+"<br>"+"Variables must begin with a letter, $ or _. "+"For example: $name, _name or name"+"<br>"+" Variable names are case sensitive"+"<br>"+"Variable names should not be JS keywords")

// CHAPTER 5

// Question 1
var number1=+prompt("Enter value:")
var number2=+prompt("Enter value:")
var result=number1+number2
document.write("Sum of "+number1+" and "+number2+" is "+result);

// Question 2
var number1=+prompt("Enter value:")
var number2=+prompt("Enter value:")
var result=number1-number2
document.write("Subtraction of "+number1+" by "+number2+" is "+result);

var number1=+prompt("Enter value:")
var number2=+prompt("Enter value:")
var result=number1*number2
document.write("Multiplication of "+number1+" and "+number2+" is "+result);

var number1=+prompt("Enter value:")
var number2=+prompt("Enter value:")
var result=number1/number2
document.write("Division of "+number1+" by "+number2+" is "+result);

var number1=+prompt("Enter value:")
var number2=+prompt("Enter value:")
var result=number1%number2
document.write("Modulus division of "+number1+" by "+number2+" is "+result);

// Question 3
var number
document.write("Value after variable declaration is: "+number+"<br>");
var number=5;
document.write("Initial value: "+number+"<br>");
var number=number+1
document.write("Value after increment is: "+number+"<br>");
var addition=number+7
document.write("Value after addition is: "+addition+"<br>");
var addition=addition-1
document.write("Value after decrement is: "+addition+"<br>");
var remainder=addition%3
document.write("The remainder is: "+remainder);

// Question 4
var ticketPrice=600;
var customers=+prompt("How many tickets you want: ")
var result=ticketPrice*customers
document.write("Total cost to buy "+customers+" tickets to a movie is "+result+"PKR");

// Question 5
var number=+prompt("Enter number: ")
document.write("Table of "+number+"<br>");
var a=1;
for(a=1;a<=10;a++){
    document.write(number+"x"+a+"="+(number*a)+"<br>");
}

// Question 6
var celsius=25;
var convertFarenheit=(celsius*9/5)+32
document.write(celsius+"oC is "+convertFarenheit+"oF"+"<br>");

var farenheit=70;
var convertCelsius=(farenheit-32)*5/9
document.write(farenheit+"oF is "+convertCelsius+"oC");

// Question 7
document.write("Shopping Cart"+"<br>"+"<br>"+"<br>");

var priceItem1=+prompt("Enter price of item 1")
var quantityItem1=+prompt("Enter quantity of item 1")
var priceItem2=+prompt("Enter price of item 2")
var quantityItem2=+prompt("Enter quantity of item 2")
var shippingCharges=+prompt("Enter shipping charges")

document.write("Price of Item 1 is "+priceItem1+"<br>");
document.write("Quantity of Item 1 is "+quantityItem1+"<br>");
document.write("Price of Item 2 is "+priceItem2+"<br>");
document.write("Quantity of Item 2 is "+quantityItem2+"<br>");
document.write("Shipping Charges "+shippingCharges+"<br>"+"<br>");

var result=(priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges

document.write("Total cost of your order is "+result);

// Question 8
var totalMarks=+prompt("Enter total marks: ")
var obtainedMarks=+prompt("Enter obtained marks: ")
var result=(obtainedMarks/totalMarks)*100

document.write("Total marks: "+totalMarks+"<br>");
document.write("Obtained marks: "+obtainedMarks+"<br>");
document.write("Percentage: "+result);

// Question 9
var dollarRate=104.80;
var riyalRate=28;
var amountOfDollars=+prompt("Enter US dollar amount: ")
var amountOfRiyal=+prompt("Enter Saudi Riyal amount: ")
var total=(dollarRate*amountOfDollars)+(riyalRate*amountOfRiyal)

document.write("Currency in PKR "+"<br>"+"<br>"+"<br>");
document.write("Total Currency in PKR: "+total);

// Question 10
var number=+prompt("Enter number: ")
var result=number+5
var result=result*10
var result=result/2

document.write(result);

// Question 11
document.write("Age Calculator"+"<br>"+"<br>"+"<br>");
var currentYear=+prompt("Enter current year: ")
var birthYear=+prompt("Enter birth year: ")
var age=currentYear-birthYear

document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("Your age is: "+age);

// Question 12
document.write("The Geometrizer "+"<br>"+"<br>"+"<br>");

var radius=+prompt("Enter radius: ");
var pie=3.142;
var circumference=2*pie*radius;
var area=pie*(radius**2);

document.write("Radius of a circle: "+radius+"<br>");
document.write("The circumference is: "+circumference+"<br>");
document.write("The area is: "+area);

// Question 13
document.write("The Lifetime Supply Calculator"+"<br>"+"<br>"+"<br>");
var favSnack=prompt("Enter favourite snack: ");
var currentAge=+prompt("Enter current age: ");
var maxAge=+prompt("Enter maximum age: ");
var estimatedAmount=+prompt("Enter an estimated amount per day: ");

var result=(maxAge-currentAge)*estimatedAmount;

document.write("You will need "+result+" "+favSnack+" to last you until the ripe old age of "+maxAge);


// CHAPTER 6-9

// Question 1
document.write("Result: "+"<br>");
var a=10;
document.write("The value of a is: "+a+"<br>");
document.write("........................"+"<br>"+"<br>");
var a=a+1;
document.write("The value of ++a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("<br>"+"<br>");
document.write("The value of a++ is: "+a+"<br>");
var a=a+1;
document.write("Now the value of a is: "+a+"<br>");
document.write("<br>"+"<br>");
var a=a-1;
document.write("The value of --a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("<br>"+"<br>");
document.write("The value of a-- is: "+a+"<br>");
var a=a-1;
document.write("Now the value of a is: "+a+"<br>");


// Question 2 
var a=2;
var b=1;
var result=--a - --b + ++b + b--;

document.write(--a);
document.write(--a - --b);
document.write(--a - --b + ++b);
document.write(--a - --b + ++b + b--);


// Question 3
var name=prompt("Enter name: ");
alert("Hello "+name);

// Question 5
var number=+prompt("Enter number: ")
var a=1;
if(number==''){
    document.write("Table of "+5+"<br>");
    for(a=1;a<=10;a++){
        document.write(5+"x"+a+"="+(5*a)+"<br>");
    }
}
else{
    document.write("Table of "+number+"<br>");
    for(a=1;a<=10;a++){
        document.write(number+"x"+a+"="+(number*a)+"<br>");
    }
}

// Question 7
var subject1=prompt("Enter subject: ");
var subject2=prompt("Enter subject: ");
var subject3=prompt("Enter subject: ");
var totalMarksOfEachSubject=100;
var subject1ObtainedMarks=+prompt("Enter obtained marks of this subject: ");
var subject2ObtainedMarks=+prompt("Enter obtained marks of this subject: ");
var subject3ObtainedMarks=+prompt("Enter obtained marks of this subject: ");
var totalMarks=300;
var obtainedMarks=subject1ObtainedMarks+subject2ObtainedMarks+subject3ObtainedMarks;
var subject1Percentage=(subject1ObtainedMarks/totalMarksOfEachSubject)*100;
var subject2Percentage=(subject2ObtainedMarks/totalMarksOfEachSubject)*100;
var subject3Percentage=(subject3ObtainedMarks/totalMarksOfEachSubject)*100;
var percentage=(obtainedMarks/totalMarks)*100;

document.write("Subject "+" Total Marks"+" Obtained Marks "+" Percentage"+"<br>");
document.write(subject1+" "+totalMarksOfEachSubject+" "+subject1ObtainedMarks+" "+subject1Percentage+"%"+"<br>");
document.write(subject2+" "+totalMarksOfEachSubject+" "+subject2ObtainedMarks+" "+subject2Percentage+"%"+"<br>");
document.write(subject3+" "+totalMarksOfEachSubject+" "+subject3ObtainedMarks+" "+subject3Percentage+"%"+"<br>");
document.write(" "+totalMarks+" "+obtainedMarks+" "+percentage+"%");

// CHAPTER 9-11

// Question 1
var city=prompt("Enter name of the city: ");
if(city==='Karachi'){
    document.write("Welcome to city of lights");
}

// Question 2
var gender=prompt("Enter your gender: ");
if(gender==='male'){
    document.write("Good Morning Sir");
}
else if (gender==='female'){
    document.write("Good Morning Ma'am");
}
else{
    document.write("Please specify your gender");
}

// Question 3
var color=prompt("Enter color: ");
if (color==='red'){
    document.write("Must Stop");
}
else if (color==='yellow'){
    document.write("Ready to move");
}
else if (color==='green'){
    document.write("Move Now");
}
else{
    document.write("Nothing");
}

// Question 4
var fuel=+prompt("Enter remaining fuel: ");
if (fuel<=0.25){
    document.write("Please refill the fuel in your car");
}

// Question 5
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");     //(Condition is true)
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");    //(Condition is false)
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");                          // (Condition is false)
}
if (c === 13){
    alert("condition 2 is true");                          // (Condition is true)
}
if (++c < 14){
    alert("condition 3 is true");                           //(Condition is false)
}
if(c === 14){
    alert("condition 4 is true");                         //  (Condition is true)
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");                                  //(Condition is true)
}

if (true){
    alert("True");                                             //(Condition is true)
}
if (false){
    alert("False");                                           // (Error)
}

if("car" < "cat"){
    alert("car is smaller than cat");
}
    
// Question 6
var totalMarks=300;
var obtainedMarks=+prompt("Enter obtained marks: ");
var percentage=(obtainedMarks/totalMarks)*100;
var grade='';
if (percentage>=80){
    var grade='A-one';
    document.write("Total marks: "+totalMarks+"<br>");
    document.write("Marks obtained: "+obtainedMarks+"<br>");
    document.write("Percentage: "+percentage+"%"+"<br>");
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: Excellent"+"<br>");
}
else if (percentage>=70){
    var grade='A';
    document.write("Total marks: "+totalMarks+"<br>");
    document.write("Marks obtained: "+obtainedMarks+"<br>");
    document.write("Percentage: "+percentage+"%"+"<br>");
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: Good"+"<br>");
}
else if (percentage>=60){
    var grade='B';
    document.write("Total marks: "+totalMarks+"<br>");
    document.write("Marks obtained: "+obtainedMarks+"<br>");
    document.write("Percentage: "+percentage+"%"+"<br>");
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: You need to improve"+"<br>");
}
else if (percentage<60){
    var grade='Fail';
    document.write("Total marks: "+totalMarks+"<br>");
    document.write("Marks obtained: "+obtainedMarks+"<br>");
    document.write("Percentage: "+percentage+"%"+"<br>");
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: Sorry"+"<br>");
}

// Question 7
var secretNumber=Math.floor(Math.random()*10)+1;
var guess=+prompt("Guess secret number:  ");
if (guess===secretNumber){
    document.write("Bingo! Correct answer")
}
else if (guess===(secretNumber+1)){
    document.write("Close enough to the correct answer")
}
else{
    document.write("Wrong answer")
}

// Question 8
var number=+prompt("Enter number: ");
if ((number%3)===0){
    alert("This number is divisible by 3");
}
else{
    alert("Not divisible by 3")
}

// Question 9
var number=+prompt("Enter number: ");
if (number%2===0){
    document.write("Even number");
}
else{
    document.write("Odd number");
}

// Question 10
var temperature=+prompt("Enter temperature: ");
if (temperature>40){
    document.write("It is too hot outside.");
}
else if (temperature>30){
    document.write("The Weather today is Normal.");
}
else if (temperature>20){
    document.write("Today’s Weather is cool.");
}
else if (temperature>10){
    document.write("OMG! Today’s weather is so Cool.");
}
else{

}


// Question 11
var number1=+prompt("Enter first number: ");
var operator=prompt("Enter operator: ");
var number2=+prompt("Enter second number: ");


if (operator=='+'){
    document.write("Result: "+(number1+number2));
}
else if (operator=='-'){
    document.write("Result: "+(number1-number2));
}
else if (operator=='*'){
    document.write("Result: "+(number1*number2));
}
else if (operator=='/'){
    document.write("Result: "+(number1/number2));
}
else if (operator=='%'){
    document.write("Result: "+(number1%number2));
}
else{
    alert("Invalid operator");
}



// CHAPTER 12-13

// Question 1
var number=prompt("Enter character: ");
if (number>=65 && number<=90){
    document.write("Uppercase letter");
}
else if (number>=97 && number<=122){
    document.write("Lowercase letter");
}
else{
    document.write("Number");
}

// Question 2
var number1=+prompt("Enter first number: ");
var number2=prompt("Enter second number: ");

if (number1>number2){
    document.write(number1);
}
else if (number2>number1){
    document.write(number2);
}
else {
    document.write("Equal integers");
}

// Question 3
var number=+prompt("Enter: ");
if (number>0){
    alert("Positive number");
}
else if (number<0){
    alert("Negative number");
}
else{
    alert("Zero");
}

// Question 4
var character=prompt("Enter: ");
if (character.length===1){
    if ((character=='a')||(character=='e')||(character=='i')||(character=='o')||(character=='u')){
        document.write("True");
    }
    else{
        document.write("False");
    }
}
else{
    document.write("Enter single character only");
}

// Question 5
var password='bingo';
var userPassword=prompt("Enter password: ");
if (userPassword){
    if (userPassword===password){
        document.write("Correct! The password you entered matches the original password");
    }
    else{
        document.write("Incorrect password");
    }
}
else{
    document.write(" Please enter your password");
}

// Question 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

// Question 7
var time=+prompt("Enter time: ");

if (time>=0000 && time<1200){
    document.write("Good morning!");
}
else if (time>=1200 && time<1700){
    document.write("Good afternoon!");
}
else if (time>=1700 && time<2100){
    document.write("Good evening!");
}
else if (time>=2100 && time<2359){
    document.write("Good night");
}
else{
    document.write("Invalid time");
}

// CHAPTER 14-16


// Question 1
var arr=[];

// Question 2
var arr1=new Array();

// Question 3
var strArr=['a','b','c'];

// Question 4
var numArr=[1,2,3];

// Question 5
var boolArr=[true,false];

// Question 6
var mixArr=[1,'a',false];

// Question 7
var array=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil.','PhD'];
for (var i=0; i<array.length; i++){
    document.write(array[i]+"<br>");
}

// Question 8
var names=['Micheal','John','Tony'];
var scores=[320,230,480];
var totalMarks=500;

for (var i=0; i<3; i++){
    document.write("Score of "+names[i]+" is "+scores[i]+". Percentage: "+((scores[i]/totalMarks)*100)+"%"+"<br>");
}

// Question 9
var colorNames=['red','green','blue'];
document.write(colorNames+"<br>");

var user=prompt("Which color you want to add in the beginning: ");
colorNames.unshift(user);
document.write(colorNames+"<br>");

var user=prompt("Which color you want to add in the last: ");
colorNames.push(user);
document.write(colorNames+"<br>");

colorNames.unshift('pink','black');
document.write(colorNames+"<br>");

colorNames.shift();
document.write(colorNames+"<br>");

colorNames.pop();
document.write(colorNames+"<br>");

var index=+prompt("At which position you want to add : ");
var user=prompt("Which color you want to add: ");
colorNames.splice(index,0,user);
document.write(colorNames);

var index=+prompt("At which position you want to delete : ");
var quantity=+prompt("How many colors you want to delete: ");
colorNames.splice(index,quantity);
document.write(colorNames);

// Question 10
var score=[320,230,480,120];
var sortedScore=score.sort();

document.write(sortedScore);

// Question 11
var citiesList=['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
var selected=citiesList.slice(0,3);
var selectedCities=[selected];

document.write(selectedCities);

// Question 12
var arr = ['This','is','my','cat'];
var str=arr.join(' ');

// Question 13
var devices=['Keyboard','mouse','printer','monitor'];
for (var i=0; i<devices.length; i++){
    document.write("Out:"+devices[i]+"<br>");
}

// Question 14
var devices=['Keyboard','mouse','printer','monitor'];
var reversedDevices = [];
for(var i =  devices.length -1; i >= 0; i--) {
  document.write("Out:"+reversedDevices.push(devices[i])+"<br>");
}

// Question 15
var phones=['Apple','Samsung','Motorola','Nokia','Sony','Haier'];
for (var i=0; i<phones.length; i++){
    document.write(phones[i]+"<br>");
}



// CHAPTER 17-20


// Question 1
var array=[[],[],[]];

// Question 2
var array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0; i<3; i++){
    for (var j=0; j<4; j++){
        document.write(array[i][j]+" ");
    }
    document.write("<br>");
}

// Question 3
for (var i=1; i<11; i++){
    document.write(i+"<br>");
}

// Question 4
var number=+prompt("Enter number to show its multiplication table: ");
var length=+prompt("Enter length of multiplication table: ");

document.write("Multiplication table of "+number+"<br>");
document.write("Length "+length+"<br>"+"<br>"+"<br>");
for (var i=1; i<length+1; i++){
    document.write(number+" x "+i+" = "+(number*i)+"<br>");
}

// Question 5
var fruits=['apple','banana','mango','orange','strawberry'];
for (var i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>");
}
document.write("<br>");
for (var i=0; i<fruits.length; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

// Question 6
document.write("Counting:"+"<br>");
for (var i=1; i<16; i++){
    document.write(i+",");
}
document.write("<br>"+"<br>"+"<br>");

document.write("Reverse Counting:"+"<br>");
for (var i=10; i>0; i--){
    document.write(i+",");
}
document.write("<br>"+"<br>"+"<br>");

document.write("Even:"+"<br>");
for (var i=0; i<21; i++){
    if (i%2==0){
        document.write(i+",");
    }
}
document.write("<br>"+"<br>"+"<br>");

document.write("Odd:"+"<br>");
for (var i=0; i<20; i++){
    if (i%2!=0){
        document.write(i+",");
    }
}
document.write("<br>"+"<br>"+"<br>");

document.write("Series:"+"<br>");
for (var i=1; i<11; i++){
    document.write(i*2+"k"+",");
}

// Question 7
var array=['cake','apple pie','cookie','chips','patties'];
var user=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am" );
var user2=user.toLowerCase();

for (var i=0; i<array.length; i++){
    if (user2==array[i]){
        alert(array[i]+" is available at index "+i+" in our bakery");
    }
    else {
        alert("We are sorry ."+user2+" is not available in our bakery");
    }
    break;
}

// Question 8
var array=[24,53,78,91,12];
var largest=array[0];
for (var i=0; i<array.length; i++){
    if (largest<array[i]){
        largest=array[i];
    }
}
document.write("The largest number is: "+largest);

// Question 9
var array=[24,53,78,91,12];
var smallest=array[0];
for (var i=0; i<array.length; i++){
    if (smallest>array[i]){
        smallest=array[i];
    }
}
document.write("The smallest number is "+smallest);

// Question 10
for (var i=1; i<101; i++){
    if (i%5==0){
        document.write(i+",");
    }
}













// CHAPTER 21-25

// Question #1
var firstName=prompt("Enter first name")
var lastName=prompt("Enter last name")
var fullName=firstName+lastName
document.write(fullName)

// Question 2
var model=prompt("Enter mobile model:")
var modelLength=model.length;
document.write("Length Of string: "+modelLength)

// Question 3
var text="Pakistan"
var firstChar=text.indexOf("n");
document.write("Index of 'n': "+firstChar)

// Question 4
var text="Hello World"
var last=text.lastIndexOf("l");
document.write("Last Index of 'l': "+last)

// Question 5
var text="Pakistani"
document.write(text.charAt(3));

// Question 6
var firstName=prompt("Enter first name")
var lastName=prompt("Enter last name")
var fullName = firstName.concat(lastName);
document.write(fullName);

// Question 7
var text='Hyderabad'
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 5) === "Hyder") {
    text = text.slice(0, i) + "Islam" + text.slice(i + 5);
    document.write(text)
}
}

// Question 8
var message="Ali and Sami are best friends. They play cricket and football together";
var result=message.replace(/and/g,'&');
document.write(result);

// Question 9
var value='472';
var value2=parseInt(value);

document.write("Value: "+value+"<br>");
document.write("Type: "+typeof(value)+"<br>");
document.write("Value: "+value2+"<br>");
document.write("Type: "+typeof(value2));

// Question 10
var word=prompt("Enter word: ");
var word2=word.toUpperCase();

document.write("User input: "+word+"<br>" );
document.write("Upper case: "+word2);

// Question 11
var word=prompt("Enter word: ");
var firstChar=word.slice(0,1);
var otherChar=word.slice(1);
firstChar=firstChar.toUpperCase();
otherChar=otherChar.toLowerCase();
var final=firstChar+otherChar;

document.write("User input: "+word+"<br>");
document.write("Title case: "+final);

// Question 12
var number=35.36;
var str=number.toString();
var firstChar=str.slice(0,2);
var otherChar=str.slice(3,5);
var final=firstChar+otherChar;

document.write("Number: "+number+"<br>");
document.write("Result: "+final);

// Question 13 left

// Question 14
var desserts=["cake","apple pie","cookie","chips","patties"];
var user=prompt("Enter: ");
var user2=user.toLowerCase();

for (var i=0; i<desserts.length; i++){
    if (user2==desserts[i]){
        alert(user2+" is available at index "+desserts.indexOf(user2)+" in our bakkery");
    }
}

// Question 15 left 

// Question 16
var university = "University of Karachi";
var arr=university.split('');
console.log(arr);

// Question 17
var user=prompt("Enter: ");
var u=user.charAt(user.length-1);
document.write("Last character of input: "+u);

// Question 18 left



// CHAPTER 26-30

// Question 1
var number=+prompt("Enter positive  integer: ");
if (number>0){
    document.write("number: "+number+"<br>");
    document.write("round off value: "+Math.round(number)+"<br>");
    document.write("floor value: "+Math.floor(number)+"<br>");
    document.write("ceil value: "+Math.ceil(number));
}
else{
    document.write("Try again");
}

// Question 2
var number=+prompt("Enter negative  integer: ");
if (number<0){
    document.write("number: "+number+"<br>");
    document.write("round off value: "+Math.round(number)+"<br>");
    document.write("floor value: "+Math.floor(number)+"<br>");
    document.write("ceil value: "+Math.ceil(number));
}
else{
    document.write("Try again");
}

// Question 3
var number=+prompt("Enter: ");
document.write("The absolute value of "+number+" is "+Math.abs(number));

// Question 4
document.write("random dice value: "+(Math.floor(Math.random()*6)+1));

// Question 5
var coin=(Math.floor(Math.random()*2)+1);
if (coin==2){
    document.write(coin+"<br>"+"random coin value: Heads");
}
else{
    document.write(coin+"<br>"+"random coin value: Tails");
}

// Question 6
document.write(" random number between 1 and 100: "+(Math.round(Math.random()*100)+1));

// Question 7
var user=prompt("Enter your weight in kilograms");
var user2=parseInt(user);

document.write("The weight of user is "+user2+" kilograms");

// Question 8
var secretNumber=Math.floor(Math.random()*10)+1;
var userGuess=+prompt("Enter your guess: ");

if (userGuess==secretNumber){
    alert("Congratulation"); 
}
else{
    alert("Try again");
}

// CHAPTER 31-34

// Question 1
document.write(new Date());

// Question 2
var d = new Date();
var currentMonth = d.getMonth();
document.write("Current month: "+currentMonth);

// Question 3
var x=new Date();
var date=x.toString();
document.write("Today is "+date.slice(0,3));

// Question 4
var x=new Date();
var y=x.toString();

if ((y.slice(0,2))=='Sat'){
    document.write("It's Fun day");
}
else if ((y.slice(0,2))=='Sun'){
    document.write("It's Fun day");
}
else{
    document.write("Boring day");
}

// Question 5
var x=new Date();
var date=x.getDate();
if (date<16){
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

// Question 6
var x=new Date();
var y=x.getTime();
var z=(y/1000)/60;

document.write("Current Date: "+x+"<br>");
document.write("Current milliseconds since January 1, 1970: "+y+"<br>");
document.write("Elapsed minutes since January 1, 1970: "+z);

// Question 7
var x=new Date();
var time=x.getHours();
if (time>0 && time<=12){
    document.write("It's AM");
} 
else if (time>12 && time<=23){
    document.write("It's PM");
}
else{
    document.write("Midnight");
}

// Question 8
var laterDate=new Date("Thu Dec 31 2020 00:00:00 GMT+0500 (PKT)");
alert(laterDate);

// Question 9
var date=new Date("Fri Apr 24 2020 00:00:00 GMT+0500 (PKT)");
var x=new Date();
var z=x-date;
var minutes=((z/1000)/60);
var days=minutes/ 1440;
days=Math.round(days);
document.write(days+ " days have passed since 1st ramzan");

// Question 10
var date=new Date("Sat Dec 5 2015 22:50:16 GMT+0500 (PKT)");
var oldDate=new Date("Thu Jan 1 2015 00:00:00 GMT+0500 (PKT)");

var result=date-oldDate;
result=result/1000;

document.write(result+" seconds elapsed between the reference date and the beginning of 2015");

// Question 11
var currentDate=new Date();
var hours=currentDate.getHours();
var result=(hours-1);


document.write("1 hour ago, it was "+result+" hours");

// Question 12
var date=new Date();
var year=date.getFullYear();
var result=year-100;

document.write("100 years back it was "+result);

// Question 13
var user=+prompt("Enter age: ");
var date=new Date();
var year=date.getFullYear();
var result=year-user;

alert("Your birth year is: "+result);

// Question 14
var name=prompt("Enter name: ");
var month=prompt("Enter month: ");
var units=+prompt("Enter units: ");
var chargesPerUnit=+prompt("Enter charges per unit");
var netAmountPayable=units*chargesPerUnit;
var lateAmountCharges=350;
var grossAmountPayable=netAmountPayable+lateAmountCharges;

document.write("K-Electric Bill"+"<br>"+"<br>"+"<br>"+"<br>");
document.write("Customer Name: "+name+"<br>");
document.write("Month: "+month+"<br>");
document.write("Number of Units: "+units+"<br>");
document.write("Charges per unit: "+chargesPerUnit+"<br>");
document.write("<br>");
document.write("Less Amount Payable (within Due Date): "+netAmountPayable+"<br>");
document.write("Late payment surcharge: "+lateAmountCharges+"<br>");
document.write("Gross Amount Payable (after Due Date): "+grossAmountPayable+"<br>");

// CHAPTER 35-38

// Question 1
function currentDate(){
    var date=new Date();
    document.write(date);
}
currentDate()

// Question 2
function greet(){
    var firstName=prompt("Enter first name: ");
    var lastName=prompt("Enter last name: ");
    alert("Hello "+firstName +lastName)
}
greet()

// Question 3
function calculate(){
    var num1=+prompt("Enter first number: ");
    var num2=+prompt("Enter second number: ");
    var result=num1+num2
    alert("The result is "+result)
}
calculate()

// Question 4 
function calculator(num1,num2,operator){
    if(operator=='+'){
        alert(num1+num2)
    }
    else if(operator=='-'){
        alert(num1-num2)
    }
    else if(operator=='*'){
        alert(num1*num2)
    }
    else if(operator=='/'){
        alert(num1/num2)
    }
}
calculator(1,2,'*')

// Question 5
function square(num){
    alert(num**2)
}
square(2)

// Question 6
function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    alert(num);
  }
factorialize(5);

// Question 7
function counting(num1,num2){
    for(var i=0; i!=num2; i++){
        console.log(num1+i)
    }
}
counting(1,10)

// Question 8
function calculateHypotenuse(){
    function calculateSquare(num){
        var result=num**2;
        return result;
    }
    console.log(calculateSquare(3)+calculateSquare(3));
}
calculateHypotenuse()

// Question 9
function areaOfTriangle(width,height){
    alert(width*height)
}
areaOfTriangle(2,2)

function areaOfTriangle(){
    var width=2;
    var height=2;
    alert(width*height)
}
areaOfTriangle()

// Question 10
function palindrome(){
    var user=prompt("Enter: ");
    var check="";

    for(var i=user.length-1; i>=0; i--){
        check=check+user[i]
    }
    if(check===user){
        alert("Palindrome");
    }
    else{
        alert("Not palindrome")
    }
}
palindrome()

// Question 11
function titleCase(user){
    user=user.split(' ');
    for(var i=0; i<user.length; i++){
        var letters=user[i].split('');
        letters[0]=letters[0].toUpperCase();
        user[i]=letters.join('');
    }
    alert(user.join(' '));
}

titleCase("the quick brown fox")

// Question 12
function longWord(user){
    var nw =user.split(' ');
    var result=nw[0];
    for(var i=0; i<nw.length; i++){
        if(nw[i].length>result.length){
            result=nw[i];
        }

    }
    return result;
    
}
console.log(longWord("Web Development Tutorial"))

// Question 13
function foo(str,letter){
    var ltrs=str.split('');
    var letterCount=0;
    for(var i=0;i<ltrs.length; i++){
        if(letter==ltrs[i]){
            letterCount+=1;
        }
    }
    return letterCount;
}

console.log(foo('bilal','a'))

// Question 14
function calcCircumference(r){
    alert("The circumference is "+2*Math.PI*r);
}
calcCircumference(4)

function calcArea(r){
    alert("The area is "+(Math.PI*(r**2)));
}
calcArea(4);








// CHAPTER 38-42

// Question 1
function power(a,b){
    var result=a**b;
    return result
}
alert(power(2,3))

// Question 2
function leapYear(year){
    if((year%400==0)&&(year%100==0)){
        alert("Leap Year")
    }
    else{
        alert("Not a leap year")
    }
}
leapYear(2000)

// Question 3
function area(a,b,c){
    var S=(a+b+c)/2;
    var area=S*(S-a)*(S-b)*(S-c);

    return area
}
console.log(area(2,2,2));

// Question 4
function mainFunction(sub1,sub2,sub3){
    function average(){
        var result=(sub1+sub2+sub3)/3;
        alert("Average is "+result);
    }
    average()
    function percentage(){
        var result2=(((sub1+sub2+sub3)/300)*100);
        alert("Percentage is "+result2);
    }
    percentage()
}

console.log(mainFunction(44,55,66))

// Question 5
function indexPosition(user,index){
    var word=user.split('');
    for(var i=0; i<word.length; i++){
        if(word[i]==index){
            alert(i);
        }
    }
}
indexPosition("Hello","e")

// Question 6
function sentence(str){
    var word=str.split('');
    var letter=[];
    if(word.length<=25){
        for(var i=0; i<word.length; i++){
            if(word[i]!='a'&&word[i]!='e'&&word[i]!='i'&&word[i]!='o'&&word[i]!='u'){
            letter.push(word[i]);
            }
        }
        return letter.join('');
    }else{
        console.log("Length us greater than 25");
    }
}
console.log(sentence("The quick brown fox jumps"));

// Question 7 Left


// Question 8
function inMeters(dist){
    alert(dist*1000);
}
function inFeet(dist){
    alert(dist*3280.84);
}
function inInches(dist){
    alert(dist*39370.1);
}
function inCentimeters(dist){
    alert(dist*100000);
}

// Question 9
function pay(hours){
    var overRate=12;
    if(hours>40){
        var result=hours+overRate;
        alert("Over time is "+result)
    }
    else{
        alert(hours)
        
    }
}
pay(60)

// Question 10 
function withdraw(){
    var amount=+prompt("Enter amount to withdraw: ");
    var hundred=Math.floor(amount/100);
    var fifty=Math.floor((amount%100)/50);
    var ten=Math.floor(((amount%100)%50)/10);
    document.write("You will have "+hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes");
}
withdraw()


// CHAPTER 43-48
// Question 1
function show(){
    alert("Hello");
}

// Question 2
function showImage(){
    alert("Thank you for purchasing a phone from us");
}

// Question 3 is left
function deleteFunc(){
    document.getElementById('main').deleteRow(-1);
}

// Question 5
var digit=0;
function increase(){
    document.getElementById('num').innerHTML=digit;
    digit+=1;
}
function decrease(){
    digit-=1;
    document.getElementById('num').innerHTML=digit;   
}

// CHAPTER 49-52
// Question 1
function submit(){
    var a=document.getElementById('textone').value;
    var b=document.getElementById('texttwo').value;
    var c=document.getElementById('textthree').value;
    var d=document.getElementById('textfour').value;
    var e=document.getElementById('textfive').value;
    var f=document.getElementById('textsix').value;
    var result=a+'<br>'+b+'<br>'+c+'<br>'+d+'<br>'+e+'<br>'+f
    document.write(result);

}

// Question 2
function readMore(){
    var text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga similique rerum cum, sequi temporibus deleniti suscipit possimus modi cupiditate itaque? Natus qui voluptates itaque, odio obcaecati blanditiis vero maxime.';
    var para=document.getElementById("paragraph");
    para.innerHTML=text;
}

// Question 3
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }


// Chapter 53-58

// Question 1
function showImage(e){
    var modalImage=document.getElementById("modalImage");
    modalImage.src=e.src;
}


// Question 2
function zoomIn(){
    document.getElementsByTagName('p').style.fontSize='large';
    
}



// Chapter 58-67

// Question 1
var a=document.getElementById("main-content");
console.log(a.childNodes);
var b=document.getElementsByClassName("render");
document.write(b.innerHTML);
var c=document.getElementById("first-name");
var text=document.createTextNode("bilal");
c.appendChild(text);
console.log(c);
var d=document.getElementById("last-name");
var text2=document.createTextNode("asd");
d.appendChild(text2);
console.log(d);
var e=document.getElementById("email");
var text3=document.createTextNode("asd");
d.appendChild(text3);
console.log(e);


// Question 2
var nType=document.getElementById("form-content").nodeType;
console.log(nType);
var nType2=document.getElementById("lastName");
console.log(nType2.nodeType);
console.log(nType2.childNodes.nodeType);
var nType3=document.getElementById("main-content");
var a=nType3.firstChild;
var b=nType3.lastChild;
var nType4=document.getElementById("last-name");
var c=nType4.previousSibling;
var d=nType4.nextSibling;
var nType5=document.getElementById("email");
var e=nType5.parentNode;
var f=nType5.nodeTypel;





