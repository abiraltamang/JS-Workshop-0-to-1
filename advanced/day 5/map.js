const numbers = [1,2,3];

// const squareNumbers = numbers.map(function(value, index, array){
//     return value*value;
// });
// const squareNumbers = numbers.map((value)=>value*value);

// console.log(squareNumbers);



// const users = [{
//     id:1,
//     name:"ABC",
// },
// {
//     id:2,
//     name:"CDE",
// },
// ];

// users.map((value, index, array)=>{
//     console.log(value.id);
// });


// const color=["red","green","blue"];
// const colorList= color.map((value,index,array)=>{
//     return `<p> i like ${value} color</p>`;
// });
// console.log(colorList);



const employeeData = [
    {
        username        :"blonabiral",
        userid          :2423,
        age             :23,
        salary          :15000,
    },
    {
        username        :"blonnischal",
        userid          :24232,
        age             :16,
        salary          :10000,
    },
    {
        username        :"prakash",
        userid          :2423343,
        age             :20,
        salary          :12000,
    },
    {
        username        :"abhishek",
        userid          :2412323,
        age             :19,
        salary          :15000,
    },
    {
        username        :"roshni",
        userid          :24223,
        age             :21,
        salary          :13000,
    },
];


const sanitizedData = employeeData.map(function(employe){
    return {username: employe.username, age : employe.age}
}).filter((employe)=>employe.age>20);
console.log(sanitizedData);