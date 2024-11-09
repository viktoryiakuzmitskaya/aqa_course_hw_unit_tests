const arr = [5, 2, 7, 3, 4, 1, 8];

export const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
