const array: Array<any> = [1, 2, 3, 4];
const stringArray: string[] = ['1', '2', '3'];

// console.log(array[1]);
// console.log(stringArray.length);

// const buscaNum = array.find((num) => {
//     return num === 4;
// })

// console.log(buscaNum);

array.forEach((num) => {
   if(num > 2 && num % 2 === 0){
    console.log(num * 2)
   }
})

array.map((num) => {
   if(num > 2 && num % 2 === 0){
    console.log(num * 2)
   }
})

