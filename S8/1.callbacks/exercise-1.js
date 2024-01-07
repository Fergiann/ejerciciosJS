const numbersList = [];

function sum(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function father(a,b,callback){
    const response = callback(a,b);
    numbersList.push(response);
    return numbersList
}

console.log(father(5,2,substract))

