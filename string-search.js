const products =[
    'hp pavillion 15 black',
    'thinkpad t480s yellow',
    'Apple mackbook pro',
    'Dell XPS',
    'Acer Nitro',
    
]
const searching = 'pro';

const output =[];


//system-1:
/* 
for (const product of products) {
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1 ){
        output.push(product)
    }
} */

//system-2:
/* 
for (const product of products) {
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product)
    }
}
   */

//system-3:
/* 
for (const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product)
    }
} */

//system-4:
 /* 
for (const product of products) {
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
    
}  */

console.log(output);
