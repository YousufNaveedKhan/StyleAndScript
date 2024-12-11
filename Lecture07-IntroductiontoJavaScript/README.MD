## **Lecture 07 - Introduction to JavaScript**

### **Overview:**
In this lecture, you will be introduced to the basics of **JavaScript**, including its syntax, variables, data types, operators, and how it interacts with the **Document Object Model (DOM)**. You will also learn how to manipulate the DOM and handle user events on a webpage. By the end of the lecture, you will be able to create dynamic, interactive elements on your web pages using JavaScript.

### **Topics Covered:**
1. Basics of JavaScript Syntax and Usage
2. Variables, Data Types, and Operators
3. DOM Manipulation and Event Handling

---

### **1. Basics of JavaScript Syntax and Usage**

JavaScript is a versatile programming language used for dynamic web development. Understanding the basic syntax of JavaScript is the first step in mastering it.

### **Key Syntax Elements:**
- **Statements**: Each JavaScript instruction is called a statement. It ends with a semicolon (`;`).
- **Variables**: Used to store data values.
- **Functions**: A block of code designed to perform a task when called.

### **Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Syntax</title>
</head>
<body>
    <h1>JavaScript Syntax Example</h1>
    <script>
        // This is a comment in JavaScript
        let message = "Hello, World!";
        console.log(message);  // Output: Hello, World!
    </script>
</body>
</html>
```
- The `let` keyword is used to declare a variable.
- The `console.log()` function outputs data to the browser's console.

---

### **2. Variables, Data Types, and Operators**

JavaScript variables are containers for storing data values. Data types define what kind of data a variable holds. Operators perform operations on variables and values.

### **Data Types:**
- **String**: Text data enclosed in quotes.
- **Number**: Numeric data (integers or floats).
- **Boolean**: Represents `true` or `false`.
- **Array**: A collection of data values.

### **Operators:**
- **Arithmetic Operators**: `+`, `-`, `*`, `/`
- **Comparison Operators**: `==`, `===`, `!=`, `>`, `<`
- **Logical Operators**: `&&` (AND), `||` (OR)

### **Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables and Operators</title>
</head>
<body>
    <h1>JavaScript Variables and Operators</h1>
    <script>
        let num1 = 10;
        let num2 = 5;
        let sum = num1 + num2;  // Addition operator

        let isGreater = num1 > num2;  // Comparison operator
        console.log("Sum: " + sum);  // Output: Sum: 15
        console.log("Is num1 greater than num2? " + isGreater);  // Output: true
    </script>
</body>
</html>
```

- **Arithmetic Operators**: The `+` operator is used for addition.
- **Comparison Operator**: `>` checks if `num1` is greater than `num2`.

---

### **3. DOM Manipulation and Event Handling**

The **DOM (Document Object Model)** represents the HTML structure of a webpage. With JavaScript, we can manipulate the DOM to dynamically change the content of a page.

**Event Handling** refers to the process of responding to user interactions like clicks, typing, or hovering over elements.

### **DOM Manipulation Example:**
We can modify the content, style, and structure of HTML elements using JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation Example</title>
</head>
<body>
    <h1 id="title">Hello, JavaScript!</h1>
    <button id="changeButton">Change Title</button>

    <script>
        // Get the element by its ID
        let title = document.getElementById("title");
        let button = document.getElementById("changeButton");

        // Event listener for button click
        button.addEventListener("click", function() {
            title.innerText = "Title Changed!";  // Changes the text inside the h1
        });
    </script>
</body>
</html>
```

- **getElementById()**: Selects the HTML element with the specified ID.
- **addEventListener()**: Listens for the specified event (in this case, a click) and executes a function when the event occurs.
- **innerText**: Modifies the content of an element.

---

### **Conclusion:**

In this lecture, we have covered the following:
- The basics of **JavaScript syntax**, including how to declare variables and write functions.
- Understanding **variables**, **data types**, and **operators** in JavaScript.
- **DOM manipulation** and how to respond to user interactions using **event handling**.


In Sha Allah, we will soon be launching an in-depth **JavaScript course** covering advanced concepts and techniques to master the language. Stay tuned!