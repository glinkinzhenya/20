// Дан масив[16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.

const mass = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positiv = mass.filter(function (num) {
    return  num > 0
});

const negativ = mass.filter(function (num) {
    return num < 0
});

function summ(arr) {
    let summa = 0;
    arr.forEach(function (num) {
        summa += num;
    })
    return summa;
}
console.log(`сумма ${summ(positiv)} и колличество позитивных элементов ${positiv.length}`);

let minElement = 0;
let maxElement = 0;

mass.forEach(function (num) {
    if (num < minElement) minElement = num;
    if (num > maxElement) maxElement = num;
});

console.log(`минимальный элемент массива ${minElement} и его номер ${mass.indexOf(minElement)}`);

console.log(`максимальный элемент массива ${maxElement} и его номер ${mass.indexOf(maxElement)}`);

console.log(`колличество негативных элементов ${negativ.length}`);

const positivNotpair = positiv.filter(function (num) {
    return num % 2 !== 0
});

const positivPair = positiv.filter(function (num) {
    return num % 2 === 0
});

console.log(`колличество непарных позитивных элементов ${positivNotpair.length}`);

console.log(`колличество парных позитивных элементов ${positivPair.length}`);

console.log(`сумма позитивных элементов ${summ(positivPair)}`);

console.log(`сумма непарных позитивных элементов ${summ(positivNotpair)}`);

let dobutok = 1;
// positiv.forEach(function (num) {
//     dobutok *= num;
// });

positiv.filter(function (num) {
    return dobutok *= num;
});

console.log(`умножение позитивных элементов ${dobutok}`);

nul = mass.map(function (num) {
    if (num === maxElement) {
        return num = num
    } else {
        return num = 0;
    }
});

console.log(nul);