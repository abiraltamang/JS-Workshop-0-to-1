// DOM (Document Object Model)

// we select the heading 1
// const h1=document.querySelector("h1");
// const h2=document.querySelector("h2");

// we changed the text content of the h1 element 
// h1.textContent="New One";

// We're changing the style of HTML elements
// h1.style="color:green; text-align:center"

// h1.style.color="white";
// h1.style.backgroundColor="black";


// styling h2 
// h2.style.color="black";
// h2.style.backgroundColor="grey";


// const descText=document.querySelector(".description-text");
// descText.textContent="This is changed description ";

// descText.innerHTML='<a href="#">Click here</a>';
// const h2=document.querySelector("#secondary-text");
// h2.style.color="red";



// using querySelectorAll
// const parasList=document.querySelectorAll('.para');
// console.log(parasList);

// parasList[2].style.color="red";

// const detailsContainer=document.querySelector(".details-container");


// detailsContainer.id="added-id"; //Adding id using js

// detailsContainer.className="added-class";//adding class using js


// const lists=detailsContainer.classList;

// lists.remove('added-class'); //removing class in js


// Dom Traversing 

const demoPara=document.querySelector(".demo-para");
console.log(demoPara.parentElement)

const textContainer=document.querySelector(".text-container");
console.log(textContainer.children)

