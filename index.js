// let a = 'hello';
// console.log(a);
//
// {
//   let salary = 900;
//
// }
// console.log(salary)

const array = [1,2,3];
array.push(4);
console.log(array);
var a = "hello ";
var b = " it's alex speaking";
var c = a + b;
document.write(c);

let d =`bye bye ${b}`;
console.log(d)

let e = `${a} cyberomania`;
console.log(e);

function print() {
  let luke = 'blue';
  let vader = 'red';                               //blue                                                      //red
  let message = `Luke first uses a ${luke}-colored lightsaber. But his father, Vader, wields a ${vader}-colored lightsaber.`;
  console.log(message);
}
print();

let f = [7, 8, 9];
let g = [6, ...f, 10];
console.log(g);  //will show 6,7,8,9,10

//1 manner
function go(a, b, c){
  console.log(a,b,c);
}
let h = [1,2,3];
go(...h);

//better one unlimited value of arguments & data types
function further(...i){
  console.log(i);
}
further(1,2,3,4,'well done');
