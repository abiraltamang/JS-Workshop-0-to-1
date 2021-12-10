

var user = {
    id:1,
    name:{
       firstName: "ABC",
       lastName: "Tamang",
    },
    profilePicture: "https://abc.com",
};

// var id = user.id;
//  var id = user["id"];
// console.log(id);

// const {id, name, profilePicture, location} = user;
// console.log(id, name, profilePicture, location);

// const {name :userName} = user;
// console.log(userName);


const {name:{firstName},} = user;
console.log(firstName);

