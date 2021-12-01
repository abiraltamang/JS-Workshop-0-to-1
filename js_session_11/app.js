// // Events in Js 

// const btn=document.querySelector("#custom-btn");
// const topHeadingText=document.querySelector(".top-heading-text")

// btn.addEventListener("click",function(){
    
//     topHeadingText.textContent="Good Evening!"
//     topHeadingText.style.color="red"
    
// })

/*
const form=document.querySelector("#contact-service")

form.addEventListener("submit",function(e){

    const firstName=document.querySelector("#first-name")
    const lastName=document.querySelector("#last-name")

    // console.log(firstName.value)
    // console.log(lastName.value)

    //this prevents the page from being reload  
    e.preventDefault();
})

*/

// first-name 

const firstName = document.querySelector("#first-name")

firstName.addEventListener("blur",function(){

    console.log(123);
})
