const outlier = (arr) => {
    let odd = [];
    let even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }

    if (odd.length > even.length) {
        return even[0];
    }
    return odd[0];
}

console.log(outlier([1, 2, 3]));
console.log(outlier([2, 3, 4]));
console.log(outlier([444, 2222, 3]));