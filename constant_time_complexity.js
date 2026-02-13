const largeArray = new Array(1000000).fill(0);
console.log(largeArray[2]);//direct access by index (0(1))

const user = {
    "id":123,
    "name":"Sagar",
    "role":"Admin"
}
console.log(user.name);//object lookup (O(1))


