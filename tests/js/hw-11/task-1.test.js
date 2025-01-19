import { Employee, Company } from '../../../homework-solutions/js/hw-11/task-1.mjs';

describe('[JS] - [HW 11] - Task 1', () => {

 describe('Company class', () => {
  test('Should correctly create an employee and access fields', () => {
    const emp = new Employee("John", "Doe", "Developer", 3000);
    expect(emp.firstName).toBe("John");
    expect(emp.lastName).toBe("Doe");
    expect(emp.profession).toBe("Developer");
    expect(emp.salary).toBe(3000);
  });

  test('Should update salary using setter and retrieve using getter', () => {
    const emp = new Employee("John", "Doe", "Developer", 3000);
    emp.salary = 4000;
    expect(emp.salary).toBe(4000);
  });

  test('Should throw an error when setting invalid salary', () => {
    const emp = new Employee("John", "Doe", "Developer", 3000);
    expect(() => (emp.salary = -500)).toThrow();
  });

  test('getFullName() should return the full name', () => {
    const emp = new Employee("John", "Doe", "Developer", 3000);
    expect(emp.getFullName()).toBe("John Doe");
  });
});

describe('Company class', () => {
  test('Should correctly create a company and access fields', () => {
    const company = new Company("Tech Corp", "123-456", "Main Street");
    expect(company.title).toBe("Tech Corp");
    expect(company.phone).toBe("123-456");
    expect(company.address).toBe("Main Street");
  });

  test('addEmployee() should add employees to the company', () => {
    const company = new Company("Tech Corp", "123-456", "Main Street");
    const emp = new Employee("John", "Doe", "Developer", 3000);
    company.addEmployee(emp);
    expect(company.getEmployees()).toEqual([emp]);
  });

  test('addEmployee() should throw an error for invalid employee', () => {
    const company = new Company("Tech Corp", "123-456", "Main Street");
    expect(() => company.addEmployee({})).toThrow();
  });

  test('getEmployees() should return all employees', () => {
    const company = new Company("Tech Corp", "123-456", "Main Street");
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
    company.addEmployee(emp1);
    company.addEmployee(emp2);
    expect(company.getEmployees()).toEqual([emp1, emp2]);
  });

  test('getInfo() should return the correct company information', () => {
    const company = new Company("Tech Corp", "123-456", "Main Street");
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
    company.addEmployee(emp1);
    company.addEmployee(emp2);
    const info = company.getInfo();
    expect(info).toBe(
      "Компания: Tech Corp\nАдрес: Main Street\nКоличество сотрудников: 2"
    );
  });
});
});

