

function writeCards(array, event) {
    let arrayReturn=[];
    for (let i=0; i < array.length; i++ ){
        arrayReturn.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
return arrayReturn;
}

function countDown(number){
while (number>=0) {
    console.log(number);
    number--;
}
}