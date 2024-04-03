function processData(name: string, age: number, isStudent: boolean, hobbies: string[]): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Is Student: ${isStudent}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}

// this also works, because TypeScript is smart enough to infer the types, but it's usually better to be explicit
// const theName = 'John Doe';
// const age = 25;
// const isStudent = true;
// const hobbies = ['reading', 'coding', 'gaming'];

const theName: string = 'John Doe';
const age: number = 25;
const isStudent: boolean = true;
const hobbies: string[] = ['reading', 'coding', 'gaming'];

processData(theName, age, isStudent, hobbies);