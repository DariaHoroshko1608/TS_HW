const calculateAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
};

const nums = [1, 2, 3, 4, 5];
console.log(calculateAverage(nums));

