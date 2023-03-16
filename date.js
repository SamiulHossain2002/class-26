const myFavouriteDate =new Date('1911-12-16');
//console.log(myFavouriteDate);


const myFavouriteDate2 = new Date('1975,12,22');
console.log(myFavouriteDate2);


if(myFavouriteDate.getTime()>= myFavouriteDate2.getTime()){
    console.log('my fav time is earlier');
}
