# JS-tutorial

## Description :- 
JavaScript is a scripting language of the web that allows you to do/add Interactivity with User-Events, implement Conditions and Validations, Dynamic updates in a Web Page, etc.. In this practical course will learn JavaScript basics-programming fundamentals from scratch. We Will start with what is JavaScript? its uses, history, how to write JavaScript, etc. It will also cover various programming building blocks like variable, functions, array, conditionals, objects, and many more.

 History of JavaScript
---------------------

- Invented by `“Brandan Eich”` at `Netscape` in `1995` originally named as `"LiveScript"`
- `Netscape` & `Sun Java` agreements to rename `"LiveScript"` to `"JavaScript"` (As `java` is already popular in the market)
- Not at-all related to `JAVA` (completely different in concept and design)
- `Microsoft` has developed new version of "JavaScript" as `"JScript"` for `IE-3` in `1996`
- JavaScript Submitted to `ECMAScript in 1997`


JavaScript Getting Started
=====================
How to write Javascript?
---------------------
JavaScript in HTML
---------------------

- The HTML `<script>.....</script>` tag is used to embed/insert/implement a JavaScript programs/code into any part of an HTML document/page
- The `<script>.....</script>` tag specifies that we are using JavaScript
- The `<script>.....</script>` element can be placed in the `<head>`, or `<body>` section of an HTML document
- Each `<script>.....</script>` tag blocks the page rendering process until it has fully downloaded and executed the JavaScript code
  - So the best practice is to place/add the `<script>.....</script>` at the bottom/end of `body` tag/section ie. just before the closing `</body>` tag
 
    
Section 01. Variables
=====================

What is Variable?
---------------------

Variables are one of the most fundamental concepts in JavaScript and other all programming languages of the world.

- A variable is `container to store/hold the data/information`
- Developers/Programmers use Variable to `store/hold the data/information temporarily` in computer memory 
- A variable is a kind of data holder where we can store some value for programming or calculation purpose
- A JavaScript variable is simply a `name of the storage location (named containers/named storage)` for data
- Variables are symbolic names for values 
- Variables are used to store data of different types like a string of text, numbers, boolean values like true/false, an array of data, etc. 
- The data or value stored in the variables can be set, updated, and retrieved whenever needed
- Variables are declared using the keyword `var` keyword

Section 02. Data types
=======================

 Data types 
-------------

A variable in JavaScript can contain any type of data. Data types specify what kind of data can be stored and manipulated within the variable in a program. In JavaScript, different data types are available to hold different types of values/data. There are two main categories/types of data types in JavaScript:

 1. Primitive (Primary or Value) data type
- String
- Number
- Boolean
- Undefined
- Null
- Symbol (newly introduced in ES6)

2. Non-primitive (Reference or Composite) data type
- Array
- Object
- Function

Section 03. Operators
=======================

What is Operator ?
-------------------
- We know/use many operators since our initial school days, they are things like addition +, multiplication *, subtraction -, open-close round bracket ( ) or square bracket [ ]
- Operators are symbols/keywords that tell the JavaScript engine to perform some sort of actions .
- JavaScript operators are symbols that are used to perform operations on operands .
- Operators used along with our variables and constants to create expressions to implement logic and algorithms .

// Lets take a look on simple expression 
var sum = 1 + 2;

// Here 1 and 2 are called `operands` and 
// `=` & `+` are called the `operator`
// `= is the assignment` operator, `+ is the arithmetic` operator

JavaScript supports the following types of operators:
1. Arithmetic Operators
2. Assignment Operators
3. Logical Operators
4. Comparison (or Relational) Operators
5. Conditional (or ternary) Operators
6. String Operators
7. Bitwise Operators


Section 04. Conditionals Statements 
=====================================
- Conditional Operator returns a value based on the condition, it is like if-else . 

Ternary Operators
--------------------
- It works with three operands
- condition ? true output: false output 
 - eg:-(a ? b : c)

   syntax is: [age> 18 ? "adult" :" not adult " ;]

```javascript

let age = 25;
let result = age > 18 ? "adult" : "not adult";
console.log(result);
```  

- The conditional (ternary) operator is the only JavaScript operator that takes three operands
- The conditional operator that assigns a value to a variable based on some condition
- This operator is frequently used as a shortcut/short-hand method for the if statement
- Syntax: variablename = (condition) ? TRUE value: FALSE value






