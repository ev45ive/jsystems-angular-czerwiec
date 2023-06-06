## Generics

```ts
const x: Array<string> = ["1123"];
const x1 = x[0]; // string

function getFirst<T>(arr: T[]) {
  return arr[0];
}
getFirst([1, 2, 3]); // T = number
getFirst(["123", 123]); // T = number | string

const y: Array<number> = [123, 12, 3];
const tictacto: Array<Array<"X" | "O">> = [
  ["O", "X", "O"],
  ["O", "X", "O"],
  ["O", "X", "O"],
];



function ngForOf<T>(val: Array<T>) {
  return {
    $implicit: val[0],
  };
}
ngForOf([1, 2, 3]).$implicit;

```
