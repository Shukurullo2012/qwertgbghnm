
function checkNumbers(numbers) {
    numbers.forEach(num => {
        if (num % 2 === 0) {
            console.log(`${num} - Четное`);
        } else {
            console.log(`${num} - Нечетное`);
        }
    });
}

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
checkNumbers(inputNumbers);





















