function add(a,b,fxn){
    var sum=a+b;
    fxn(sum);
}

function result(res){
    console.log("Result is : "+res);
}

add(1,2,result);