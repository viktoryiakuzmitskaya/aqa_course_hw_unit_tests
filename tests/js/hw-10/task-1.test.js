import {
  qa,
  bindResult,
  callResult,
  applyResult,
  functionCallCounter,
} from '../../../homework-solutions/js/hw-10/task-1';

describe('[JS] - [HW 10] - Task 1', () => {
  describe('Context', () => {
    test('getInfo should return a string with the correct context', () => {
      const result = qa.getInfo('Hello');
      expect(result).toBe("Hello, my name is John, I'm 30 and my salary is 50000");
    });
  });

  describe('Changing the context', () => {
    const anotherQa = {
      name: 'Jane',
      age: 25,
      salary: 60000,
    };

    test('getInfo with bind should return correct string', () => {
      const boundGetInfo = qa.getInfo.bind(anotherQa);
      const result = boundGetInfo('Hello');
      expect(result).toBe("Hello, my name is Jane, I'm 25 and my salary is 60000");
    });

    test('getInfo with call should return correct string', () => {
      const result = qa.getInfo.call(anotherQa, 'Hi');
      expect(result).toBe("Hi, my name is Jane, I'm 25 and my salary is 60000");
    });

    test('getInfo with apply should return correct string', () => {
      const result = qa.getInfo.apply(anotherQa, ['Hey']);
      expect(result).toBe("Hey, my name is Jane, I'm 25 and my salary is 60000");
    });
  });

  describe('Task 3: Closures', () => {
    function createCounter() {
      let count = 0;
      return function () {
        count++;
        console.log(`Function was called ${count} times`);
        return count;
      };
    }

    test('createCounter should increase count correctly', () => {
      const functionCallCounter = createCounter();
      expect(functionCallCounter()).toBe(1);
      expect(functionCallCounter()).toBe(2);
      expect(functionCallCounter()).toBe(3);
      expect(functionCallCounter()).toBe(4);
      expect(functionCallCounter()).toBe(5);
    });
  });
});
