//Create and Access Properties:
const car={
    make:"Alto",
    model:"Maruti",
    year:"2012"
};

console.log(car.make);
console.log(car.year);  

//Modiy Object properties

car.model="Camry";
car.color="blue";

console.log(car);
//iterate over  object properties

for (let  key in car )   {
    console.log(`${key}: ${car[key]}`); // Log each key-value pair
}


//Nested Oject 
const person = {
firstName:"Johan",
lastName:"Doe",
address: {

    street:"123 St",
    city:"Noida",
    zipCode:"1111"
}
};
console.log(person.address.city) ;

//Array Of Objects

const studnets =[
    {name:"Abc",grade:"A"},
    {name:"Def",grade:"B"},
    {name:"Ghi",grade:"C"}

]
studnets.forEach(studnet=>  {
  console.log(`${studnet.name}:${studnet.grade}`);
});
//Destructuring 
//object destructuring 
const{make,model}=car;
console.log(make);
console.log(model);

//Array destructuring 
const fruits=[ 'Pineapple', 'Orange', 'Mango' ]

const[firstFruit,secondFruit]=fruits;
console.log(firstFruit);
console.log(secondFruit);


//Merge two objects
const obj1= {a: 1, b: 2} ;
const obj2={b:3,c:4};

const mergedObj={...obj1,...obj2};
console.log(mergedObj);




