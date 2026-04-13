function topKFrequent(nums, k) {
    let map = {};
    
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    let buckets = Array(nums.length + 1).fill().map(() => []);

    for (let key in map) {
        buckets[map[key]].push(Number(key));
    }

    let result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));
