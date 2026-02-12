const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

// 1. Simple Loop (O(n))
// We visit every single item once.
console.log("--- Loop ---");
for (let i = 0; i < groceries.length; i++) {
    console.log(groceries[i]); // This runs 'n' times
}

// 2. Finding an element (Search)

console.log("\n--- Find ---");
const searchItem = "sugar";
const found = groceries.find(item => item === searchItem); // O(n)
console.log(`Found: ${found}`);

// 3. Array Methods like map, filter, forEach, slice, splice

console.log("\n--- Filter ---");
const numbers = [1, 5, 10, 15, 20];
const largeNumbers = numbers.filter(num => num > 10); // O(n) - checks every number
console.log(largeNumbers);
