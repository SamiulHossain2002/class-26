function addAllNumber(){
    //console.log(arguments[6]);

    let total = 0;
    for(const number of arguments){
        //console.log(number);
        
        total = total + number;
    }
    return total;
}

const total = addAllNumber(66,55,11,44,77,42,99,120,900,650);
console.log(total);