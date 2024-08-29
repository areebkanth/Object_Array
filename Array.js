// 1.Create and access elements 
const fruits=["Apple","Banana","Mango"];
//Acess the first element
console.log(fruits[0]);
//Access the last element 
console.log(fruits[fruits.length-1]);

//2.Modify array elements
console.log(fruits);
fruits[1]="Orange";//Replace Banana with orange
console.log(fruits);
fruits.push("Pineapple");//Added at end of array
console.log(fruits);
fruits.shift();//Remove the first element ("Apple")
console.log(fruits);

//3.Array Methods
const lengths=fruits.map(fruit=>fruit.length);//length of each fruit name 
console.log(lengths);

const longFruits=fruits.filter(fruit =>fruit.length>5);
console.log(longFruits);

//4.Sort and revrese
fruits.sort() ;//it will sort alphabetically
console.log(fruits);

fruits.reverse();//it will reverse the array 
console.log(fruits);

//5.Find and Index
const fruitwithG=fruits.find(fruit=>fruit.includes("g"));
console.log(fruitwithG);

const mangoIndex=fruits.indexOf("Mango");
console.log(mangoIndex);

//6.Array transformation with map and filter
const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Square of each number
const squaredNumbers=numbers.map(num=>num*num);
console.log(squaredNumbers);

const evenNumbers=numbers.filter(num=>num%2 === 0 ) ;
//Filter even numbers
console.log(evenNumbers);
//7.Reduce
const expenses = [
    { amount: 50, category: 'Groceries' },
    { amount: 20, category: 'Transportation' },
    { amount: 100, category: 'Entertainment' },
    { amount: 80, category: 'Groceries' },
    { amount: 30, category: 'Transportation' }
  ];
  //Calculate the total amount 
  const totalAmount=expenses.reduce((accumulator,expense)=> {
    return accumulator+expense.amount;
  },0);
  console.log(totalAmount);

  //Groups expense by category and calculate total amount for each category
  function groupExpensesByCategory(expenses) {
               return expenses.reduce((acc,expense) =>  {
                       if(!acc[expense.category]) {
                        acc[expense.category]=0;
                       }
                       acc[expense.category] +=expense.amount ;
                       return acc;
               },{});
  }
const groupedExpenses=groupExpensesByCategory(expenses);
console.log(groupedExpenses);

//8.Array Flattening 
const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];
//Flatten the nested array 
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray(nestedArray));

const [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // Output: "Pineapple"
console.log(secondFruit); // Output: "Orange"