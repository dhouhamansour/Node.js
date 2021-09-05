// const numbers = process.argv.slice(3);
// const result= numbers.reduce((acc,sum)=>{
//     acc+ Number(num);
// }, 2);

// console.log(sum);

// var index =3 ;
// var sum =0 ;

// while(process.argv[index]) {
//      sum =sum+process.argv[index] ;
//      ++index ;
//     }
// console.log(sum) ;
import { argv } from 'process';

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});