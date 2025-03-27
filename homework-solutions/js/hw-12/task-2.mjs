// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createToDo(requestData) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "post",
            body: JSON.stringify(requestData),
        });
        if (response.status !== 201) {
            throw new Error(`Response status is ${response.status}, expected 201`);
        }
        const responseData = response.json();
        for (const key in requestData) {
            if (responseData[key] !== requestData[key]) {
                throw new Error(`incorrect value for "${key}": got "${responseData[key]}", expected "${requestData[key]}"`);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Function execution ended");
    }
}

const toDo = {
    title: "New todo",
    completed: false
}

await createToDo(toDo);