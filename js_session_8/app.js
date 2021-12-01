// Object 

// const house={
//     color             :"green",
//     noOfFloors        :3,
//     noOfMainDoors     :1,
//     noOfRooms         :3,
//     price             :12034211.2312,
//     isListedOnSale    :true,
//     showDetailsOfHouse: function(){
//         return 'Color: '
//         +this.color
//         +' , No of floors: '
//         +this.noOfFloors;
//     }
// };
// // console.log(typeof house)

// console.log(house.showDetailsOfHouse());


// constructor function 

function Emailer(sendTo, sentFrom, message,subject) {
    this.receiver   =   sendTo;
    this.sentFrom   =   sentFrom;
    this.message    =   message;
    this.subject    =   subject;

}

const emailToTest=new Emailer(
    'testuser@gmail.com',
    'abiralblon@gmail.com',
    'Hi there',
    'Just Testing purpose');
    
    console.log(emailToTest)
    
const emailToFriend =   new Emailer(
   'friend@gmail.com',
   'abialblon@gmail.com',
   'Hi there, are you okay',
   'Just Testing purpose');

   console.log(emailToFriend)