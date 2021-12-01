const myCalculator=(function () {
    
    function sum(a,b) {
        return a+b;
    }
    function subtact(a,b) {
        return a-b;
    }
    function multiply(a,b) {
        return a*b;
    }
    function divide(a,b) {
        return a/b;
    }

    return{
        //public methods
        sum:function(a,b){
            return sum(a,b);
        },
        mul:function(a,b){
            return multiply(a,b);
        }
    }

})();


console.log(myCalculator.sum(4,5));