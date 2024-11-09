import { factorial } from '../../ts/hw-1';

describe('Homework 4 - Factorial Function', () => {
  test('should return 120 for 5!', () => {
    expect(factorial(5)).toBe(120);
  });

  test('should return 1 for 0!', () => {
    expect(factorial(0)).toBe(1);
  });
});
