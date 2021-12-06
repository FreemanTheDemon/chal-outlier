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
        return even[i];
    }
    return odd[i];
}