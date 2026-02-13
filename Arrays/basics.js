// O(1) - Constant Time Complexity Examples
// The time it takes is CONSTANT, no matter the input size.

const largeArray = new Array(1000000).fill(0); // Imagine a huge array

// 1. Direct Access by Index (O(1))
// Getting the 5th element takes 1 step, whether array has 10 or 10M items.
console.log(largeArray[2]);

// 2. Object / Map Lookup (O(1) on average)
const user = {
   "id": 123,
   "name": "Sagar",
   "role": "Admin"
};
// Accessing a property is instant. It doesn't scan the whole object.
console.log(user.name);

// 3. Basic Arithmetic (O(1))
const a = 10;
const b = 20;
const sum = a + b; // Takes constant time
console.log(sum);

// 4. Push/Pop from END of Array (O(1))
const dynamicArr = [1, 2, 3];
dynamicArr.push(4); // Only touches the end. Fast!
dynamicArr.pop();   // Only removes the end. Fast!
console.log(dynamicArr);