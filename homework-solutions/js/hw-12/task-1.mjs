// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callbackFucntion) {
    setTimeout(callbackFucntion, 2000);
}

delayTwoSeconds(() => {
    console.log("Executed not earlier than after 2 seconds");
});

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const testThen = new Promise((resolve) => {
    resolve(1);
})

testThen.then((result) => {
    console.log(result);
})

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его реджекта в консоль

const testCatch = new Promise((resolve, reject) => {
    reject('Promise failed');
})

testCatch.catch((result) => {
    console.log(result);
})

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(testNumber) {
    return new Promise((resolve) => {
        resolve(testNumber);
    })
}

promiseNumber(100).then((result) => {
    console.log(result);
})

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then


Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then((results) => {
        results.forEach((result) => {
            console.log(result);
        });
    })

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then((results) => {
        results.forEach((result) => {
            console.log(result);
        });
    })

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function handlePromiseAll() {
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((result) => {
            console.log(result); // Выводим результат каждого промиса
        });
    } catch (error) {
        console.error(`Error in Promise.all: ${error}`);
    }
}

async function handlePromiseAllSettled() {
    try {
        const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((result) => {
            console.log(`Status: ${result.status}, Value: ${result.value || result.reason}`);
        });
    } catch (error) {
        console.error(`Error in Promise.allSettled: ${error}`);
    }
}

handlePromiseAll();
handlePromiseAllSettled();





