import { sum } from '../../../js/hw-3/task-2';

describe('Homework 4 - Factorial Function', () => {
  test('should return 123 for n = 1', () => {
    expect(sum(1)).toBe(123); // 1 + 11 + 111
  });

  test('should return 246 for n = 2', () => {
    expect(sum(2)).toBe(246); // 2 + 22 + 222
  });

  test('should return 369 for n = 3', () => {
    expect(sum(3)).toBe(369); // 3 + 33 + 333
  });

  test('should return 492 for n = 4', () => {
    expect(sum(4)).toBe(492); // 4 + 44 + 444
  });
});
