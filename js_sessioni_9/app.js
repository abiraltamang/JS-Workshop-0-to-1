function Emailer(sendTo, sentFrom, message,subject) {
    this.receiver   =   sendTo;
    this.sentFrom   =   sentFrom;
    this.message    =   message;
    this.subject    =   subject;

}

Emailer.prototype.send = function () {
    return this.message + ' (was) sent to '+ this.receiver;
};


const sendEmail= new Emailer('test@gmail.com','sender@gmail.com','Hello bro','checking')

console.log(sendEmail.__proto__)