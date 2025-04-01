// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string) : boolean {
    return (/[A-Z]/.test(password)) && (/[a-z]/.test(password)) && (/[0-9]/.test(password)) && (password.length >= 8) && (password.trim().length > 0);
}

const testCases: { password: string; expected: boolean }[] = [
    { password: "Pasword1", expected: true },
    { password: "Password1", expected: true },
    { password: "Pass word1", expected: true },
    { password: "pasword1", expected: false }, 
    { password: "PASWORD1", expected: false }, 
    { password: "Password", expected: false },
    { password: "Passwo1", expected: false }, 
    { password: "        ", expected: false },
  ];
  
  testCases.forEach(({ password, expected }) => {
    const result = validatePassword(password);
    console.log(`${password}: ${result === expected ? "pass" : "fail"}`);
  });
