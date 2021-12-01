// local storage api 

// localStorage.setItem("myName","abiral");

// let myName=localStorage.getItem("myName");
// console.log(myName)
// console.log(myName)

// localStorage.removeItem("myName");
// localStorage.clear();




// let myName="Abiral";
// //ES6: template string

// const myStr = `My name is ${myName}`;

// console.log(myStr)






/*
//insert Adjacent element

const heroContainer = document.getElementById("hero-container");

//create element
const div = document.createElement("div");


//adding class name to the newly created div
div.className='custom-div';

// adding content 
div.textContent = "Hi there, this is new"
heroContainer.insertAdjacentElement('afterbegin',div)


console.log(heroContainer)
*/

//filter
//scenerio

const myFavBook = [
    {
        author      : "Parijat",
        bookName    : "The Parijat",
        price       : 120
    },
    {
        author      :"Bill Gates",
        bookName    : "The Road Ahead",
        price       :100
    },
    {
        author      : "J.K Rolling",
        bookName    : "Harry Potter",
        price       : 150
    }
]

// console.log(myFavBook.__proto__ ===Array.prototype)

let myFilteredItems = myFavBook.filter(function(book){
    return book.price <120 //when its true
});

console.log(myFilteredItems)