function thirt(n) {
    // your code
   const pattern = [1, 10, 9, 12, 3, 4];
    let sum = n;
    let lastSum = 0;

    while (sum !== lastSum) {
        lastSum = sum;
        sum = String(sum)
            .split('')
            .reverse()
            .map((digit, index) => digit * pattern[index % pattern.length])
            .reduce((acc, curr) => acc + curr, 0);
    }

    return sum;
}