
// STEP 1.	
//Convert the following identifiers to Camel Case notation:

//var someMonth;
//function theMonth 		
//currentMonth 		
//var summerMonth; 		
//myLibraryAFunction 	



//    STEP    2.	
//Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

// numeric literal expression
//15 		

// string literal expression
//"My first assigment" 

// Boolean literal expression
//false 				

// literal null value expression
//null 				 

//STEP 3.	Give me two examples of complex/variable expressions.

//var x = 2+2; 
//var aSecondExpression = Math.PI * radius * radius;


//STEP 4.	Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation to accomplish this task.
//var firstName; 
//var lastName; 
//var strAdress; 
//var zipCode; 
//var yourAge; 
//var refferalSource; 
//var mayWeContactYou;



//STEP 5.	Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.

//var firstName; 
//firstName = "Kate"; 

//var lastName = "Stoner"; 

//var strAdress = "San Diego", zipCode = "92111"; 

//var yourAge = 26; 

//var refferalSource = "  what is that  "; 

//var mayWeContactYou = false;

//STEP 6.	Create 3 variables. For the first variable, add a number and a string and use console.log to display the coerced result. For the second variable, add a Boolean and a string and display the coerced result. For the third variable, add a number and a Boolean and display the coerced result. 


//var x = 16; 
//var y = false; 
//var z = 10; 
//
//window.console.log(x + "hello");
//window.console.log(y + "hello");
//window.console.log(z + true);


//STEP 7.	Demonstrate your knowledge of hoisting. Write a program that returns undefined within the console window because of hoisting.


//window.console.log(x);
//x = "10";
//var x;


//STEP 8.	Is the following string literal valid? If not, how would you fix it?

// NOT CORRECT, ADD \\  and changed singe quotes into double. 


//var someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\"";
//console.log(someString);

// STEP 9.	Create a variable that produces a null value in the console window. Also, create a variable that produces an undefined value in the console window.
//
//var x = null;
//var y ;
//
//window.console.log(x);  
//window.console.log(y);

//STEP 10.	Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

//window.console.log(typeof "Kate");    
//window.console.log(typeof 10);
//window.console.log(typeof false);
//window.console.log(typeof {a:20, b:"hello"});
//window.console.log(typeof myname);

//STEP 11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
//
//Hello Kate Stoner, welcome to the JavaScript class!


//var x = "Hello Kate Stoner"; 
//var y = "welcome to the Javascript class"; 
//window.alert(x + ", " + y);


//STEP 12.	Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.

//var name = "Kate"; 
//var y = "welcome to the Javascript class"; 
//window.alert("Hello " +  name + ", " + y);

//STEP 13.	Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

//var course = "JavaScript"; 
//var name = "Kate";
//var hello = "Hello";
//var welcome = "welcome to the";
//
//window.alert(hello + " " + name + ", " + welcome + " " + course);


//STEP 14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
//
//Hello Zak Ruvalcaba.
//Welcome to the JavaScript class!
//
//var course = "JavaScript"; 
//var name = "Kate";
//var hello = "Hello";
//var welcome = "Welcome to the";
//
//window.alert(hello + " " + name + ", \n" + welcome + " " + course);

//STEP 15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

//var name = prompt("What is your name?");


// STEP 16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

//var course = prompt("What class are you taking?");


// STEP 17.	Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window. 

//var x = 10;
//var y = 20;
//console.log(x+y);
//


// STEP 18.	Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.

//var x = 20; 
//console.log(x+=x);


//STEP 19.	Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

//var x = 20; 
//console.log(x*=5);


// STEP 20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Next, divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.

// var x = 20 % 3; 
//console.log(x /= 1); 


//STEP 21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

//var world = 10;
//var kate = 100500;
// 
//console.log(world < kate || kate >= world );


// STEP 22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.


//var summer = 100;
//var winter = 60;
//console.log(summer == winter && false);

// STEP 23.	Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.



// var widget = new Object; 
// widget = {a:20, b:"hello"};
//console.log(typeof widget); 


// STEP 24.	Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

//var x = {a:20, b:"hello"};
//console.log(x instanceof Object);




//STEP 25.	Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

//var x = {a:20, b:"hello"};
//console.log(x instanceof String);



