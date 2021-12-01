// Function expression 

var myBook={
    bookName:"Harry Potter",
    bookAuthor:"J.K Rolling",
    // showAuthor:function () {
    //     console.log(this.bookAuthor)
    // }
}
myBook.showAuthor=function () {
    console.log(this.bookAuthor);
}

myBook.showAuthor();





var myFullName=function (first, last) {
    return first+" "+last
}

myFullName.myFunc=function () {
    console.log("this ran");
}

let fullname=myFullName("Abiral", "Tamang");
console.log(fullname);

console.dir(myFullName)

myFullName.myFunc();


