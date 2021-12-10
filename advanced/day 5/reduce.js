// const numbers = [2,3,4,5,1];


// // for finding sum 

// const sum = numbers.reduce((previousValue, currentValue)=> previousValue+currentValue);
// console.log(sum);

// //for finding min number
// const min = numbers.reduce((previousValue, currentValue)=> previousValue<currentValue? previousValue:currentValue);
// console.log(min);


// //for finding max number
// const max = numbers.reduce((previousValue, currentValue)=> previousValue>currentValue? previousValue:currentValue);
// console.log(max);



const employees = [
    {
        name    : "Pratik",
        salary  : 1000,
    },
    {
        name    : "Abiral",
        salary  : 3000,
    },
    {
        name    : "Nischal",
        salary  : 5000,
    },
];

const summedSalary = employees.reduce((prev, cur)=>{
    return {salary: prev.salary + cur.salary} ;
});

console.log(summedSalary);