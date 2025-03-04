const today = new Date();

const personalDate ={
    year:today.getFullYear(),
    month:(today.getMonth()+1),
    day:today.getDate()
}
    
console.log(personalDate.year+'年',personalDate.month+'月',personalDate.day+'日');
