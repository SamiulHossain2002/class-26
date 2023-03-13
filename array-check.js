
function megaName(names) {
    if(Array.isArray(names) == false){
        return ('please provide an aray')
    }
    let mega =[];
    for(const name of names){
        if(name.length > mega.length){
            mega = name;
        }

    }
    return mega;
}
const name = ['david', 'dollar','dg', 'dosany-dakat', 'donshahrukh','dsp']
const result = megaName(name);
//console.log(result);


const friends = ['david', 'dollar','dg', 'dosany-dakat', 'donshahrukh','dsp'];

//system-1:
/* 
if(friends.indexOf('davis')!= -1){
console.log('haa ace to');
}

else{
    console.log('naa re nei');
} */

//system-2:
/* 
if(friends.includes('dollar')){
    console.log('orre baba');
} */

//array adding:
/* 
const first =[1,2,3,5]
const second=[7,8,9];
const add =first.concat(second);
console.log(add); */




// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
 /* 
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus); */
 








