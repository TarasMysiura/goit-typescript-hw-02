/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
function showMessage(message:string):void {
  console.log(message);
}
let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first: string, second: number) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"

export {};