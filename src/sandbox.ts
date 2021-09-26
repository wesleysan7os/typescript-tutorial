let greet: Function;

//greet = 'hello';

greet = () => {
  console.log('hello, world!');
}

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
}

add(3, 5, 1);

const minus = (a: number, b: number): number => {
  return a - b;
}

let result = minus(4, 2);


