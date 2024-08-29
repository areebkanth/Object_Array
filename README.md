# Object_Array

Array Assignments 

const fruits = ["Apple", "Banana", "Mango"];
Create and Access Elements:
Create an array named fruits containing the elements: "Apple", "Banana", "Mango".
Access the first and last element of the array.
Modify Array Elements:
Replace "Banana" with "Orange" in the fruits array.
Add "Pineapple" at the end of the array.
Remove the first element of the array.
Array Methods:
Use map to create a new array with the lengths of each fruit name.
Use filter to create a new array with fruits that have more than 5 letters.
Sort and Reverse:
Sort the fruits array in alphabetical order.
Reverse the order of elements in the sorted array.
Find and Index:
Use find to get the first fruit that contains the letter "g".
Use indexOf to find the index of "Mango".
Array Transformation with map and filter:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Create an array named numbers containing integers from 1 to 10.
Use map to create a new array where each number is squared.
Use filter to create a new array containing only even numbers from the numbers array.


Aggregate Data with reduce:
Example : const expenses = [ { amount: 50, category: 'Groceries' }, { amount: 20, category: 'Transportation' }, { amount: 100, category: 'Entertainment' }, { amount: 80, category: 'Groceries' }, { amount: 30, category: 'Transportation' } ];
const expenses = [ { amount: 50, category: 'Groceries' }, { amount: 20, category: 'Transportation' }, { amount: 100, category: 'Entertainment' }, { amount: 80, category: 'Groceries' }, { amount: 30, category: 'Transportation' } ];
Given an array expenses with objects representing different expenses ({amount: number, category: string}), calculate the total amount spent.
Create a function that groups expenses by category and calculates the total amount for each category.


Array Flattening:
const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];
Create a nested array nestedArray with multiple levels of arrays within arrays.
Write a function flattenArray that flattens nestedArray into a single-level array.

Object Assignments
Create and Access Properties:
Create an object named car with properties: make, model, and year.
Access the make and year properties.
Modify Object Properties:
Change the model of the car to "Camry".
Add a new property color with the value "blue".
Iterate Over Object Properties:
Use a for...in loop to iterate over all properties of the car object and log each key-value pair.


Nested Objects:
Create an object person with properties: firstName, lastName, and address (which is another object with properties street, city, and zipCode).
Access the city of the address.
Array of Objects:
Create an array of objects named students where each object represents a student with properties name and grade.
Use forEach to print the name and grade of each student.
Destructuring:
Use object destructuring to extract make and model from the car object.
Use array destructuring to extract the first two fruits from the fruits array.
Merge Objects:
Use the spread operator to merge two objects: obj1 with properties {a: 1, b: 2} and obj2 with properties {b: 3, c: 4}
