// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ],
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ],
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ],
    },
  ];
  
  // Задания:
  // 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
  // **Пример:**
  
  // Предприятие 1 (45 сотрудников)
  // - Отдел тестирования (10 сотрудников)
  // - Отдел маркетинга (20 сотрудников)
  // - Администрация (15 человек)
  // Предприятие 2 (75 сотрудников)
  // - Отдел разработки (50 сотрудников)
  // - Отдел маркетинга (20 сотрудников)
  // - Отдел охраны труда (5 сотрудников)
  // Предприятие 3 (нет сотрудников)
  // - Отдел аналитики (нет сотрудников)
  

  function printCompanyStructure() {
    return enterprises.reduce((companyStructure, { name, departments }) => {
        const employeesCountPerEnterpise = departments.reduce((sum, department) => sum + department.employees_count, 0);
        ;
        const allDepartmentsStructure = departments.reduce((allDepartmentsStructure, department) => {
            return allDepartmentsStructure + getDepartmentStructure(department);
        }, "")
        return companyStructure + `${name} (${employeesCountPerEnterpise ? employeesCountPerEnterpise : "нет"} сотрудников)\n ${allDepartmentsStructure}`; 
    }, "");
  }

  function getDepartmentStructure({name, employees_count}) {
      return `- ${name} (${employees_count ? employees_count : "нет"} сотрудников)\n`;
  }

  
  // 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).
  
  // Пример:
  // getEnterpriseName(4)
  // getEnterpriseName("Отдел маркетинга")

  // function getEnterpriseName(departmentParameter) {
  //   const enterprise = enterprises.find(({ departments }) =>
  //     departments.some(({ id, name }) =>
  //       id === departmentParameter || name === departmentParameter
  //     )
  //   );
  //   return enterprise.name;
  // }

  function getEnterpriseName(departmentParameter) {
    return getEnterpriseByDepartmentParameter(departmentParameter).name;
  }

  function getEnterpriseByDepartmentParameter(departmentParameter) {
    return enterprises.find(({ departments }) => departments.some(({ id, name }) => id === departmentParameter || name === departmentParameter));
  }

  
  // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  
  // Пример:
  // addEnterprise("Название нового предприятия")

  function addEnterprise(name) {       
    enterprises.push({name, id: generateUnitID(), departments: []});
  } 

  function generateUnitID() {
    const maxUnitID = enterprises.reduce((maxEnterpriseID, { id: currentEnterpriseID, departments }) => {
      const maxDepartmentID = departments.reduce((maxID, { id: currentDepartmentID }) => Math.max(maxID, currentDepartmentID), 0);
      return Math.max(maxEnterpriseID, currentEnterpriseID, maxDepartmentID);
    }, 0);
    return maxUnitID + 1;
  }

  
  // 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
  
  // Пример:
  // addDepartment(1, "Название нового отдела")

  
  function addDepartment(enterpriseID, departmentName) {
    getEnterpriseByID(enterpriseID).departments.push({name: departmentName, id: generateUnitID(), employees_count: 0});    
  }

  function getEnterpriseByID(enterpriseID) {
    return enterprises.find(({ id }) => id === enterpriseID);
  }
  
  // 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
  // Пример:
  // editEnterprise(1, "Новое название предприятия")

  function editEnterprise(enterpriseID, newEnterpriseName) {
    getEnterpriseByID(enterpriseID).name = newEnterpriseName;
  }

  // editEnterprise(1, "Новое предприятие 1");
  // console.log(printCompanyStructure());
  
  // 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
  // Пример:
  // editDepartment(7, "Новое название отдела")

  function editDepartment(departmentID, newDepartmentName) {
    getDepartmentByID(departmentID).name = newDepartmentName;
  }

  function getDepartmentByID(departmentID) {
    for (const { departments } of enterprises) {
      const department = departments.find(({ id }) => id === departmentID);
      if (department) {
        return department; 
      }
    }
  }
  
  // 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
  // Пример:
  // deleteEnterprise(1)

  function deleteEnterprise(enterpriseID) {
    enterprises.splice(enterprises.findIndex(({ id }) => id === enterpriseID), 1);
  }

  
  // 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
  // Пример:
  // deleteDepartment(3)
  
  function deleteDepartment(departmentID) {
    const { departments } = getEnterpriseByDepartmentParameter(departmentID);
    const departmentIndex = departments.findIndex(({ id }) => id === departmentID);
    if (departments[departmentIndex].employees_count > 0) {
      throw new Error ('Impossible to delete a department with employees')
    } else {
      departments.splice(departmentIndex, 1);
    }
  }

  // 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  
  // Пример:
  // moveEmployees(2, 3)

  function moveEmployees(sourceDepartmentID, targetDepartmentID) {
    const sourceDepartment = getDepartmentByID(sourceDepartmentID);
    const targetDepartment = getDepartmentByID(targetDepartmentID);
    targetDepartment.employees_count += sourceDepartment.employees_count;
    sourceDepartment.employees_count = 0;
  }

  