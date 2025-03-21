class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = this.#validateName(value);
  }

  #validateName(name) {
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (typeof name !== 'string') {
      throw new Error('Invalid data type, should be a string');
    } else if ((name.length < 2) || (name.length > 50)) {
      throw new Error('Invalid length, should have from 2 to 50 characters');
    } else if (!this.#hasOnlyAllowedCharacters(name, allowedCharacters)) {
      throw new Error('Invalid characters, only Latin characters are allowed');
    } else {
      return name;
    }
  }

  #hasOnlyAllowedCharacters(stringToVaidate, allowedCharacters) {
    return [...stringToVaidate].every(character => allowedCharacters.includes(character));
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = this.#validateName(value);
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {    
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    if (typeof value !== "string") {
      throw new Error("Invalid data type, should be a string");
    } else if (!value.trim().length) {
      throw new Error("Should not be empty");
    } else if (!this.#hasOnlyAllowedCharacters(value, allowedCharacters)) {
      throw new Error('Invalid characters, only Latin characters and spaces are allowed');
    } else {
      this._profession = value;
    }
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if ((typeof value !== 'number') || Number.isNaN(value)) {
      throw new Error("Invalid data type, salary should be a number");
    } else if ((value <= 0) || (value >= 10000)) {
      throw new Error("Invalid salary value, should be more than 0 and less than 10000");
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address, employees) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error("Only instances of Employee can be added");
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(employee => employee.firstName === firstName);
    if (employee) {
      return employee;
    } else {
      throw new Error('Employee with such firstName not found');
    }
  }

  removeEmployee(firstName) {
    const employeeIndex = this.#getEmployeeIndex(firstName);
    this.#employees.splice(employeeIndex, 1);
  }

  #getEmployeeIndex(firstName) {
    const employeeIndex = this.#employees.findIndex(employee => employee.firstName === firstName);
    if (employeeIndex === -1) {
      throw new Error('Employee with such firstName not found');
    } else {
      return employeeIndex;
    }
  }

  getTotalSalary() {
    return this.#employees.reduce((totalSalary, { salary }) => totalSalary + salary, 0);
  }
}

export { Employee, Company };
