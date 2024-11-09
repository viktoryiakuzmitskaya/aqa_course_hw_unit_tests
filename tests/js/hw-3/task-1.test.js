import {
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_6_type,
  item_7,
  item_7_type,
  sum_3_4,
  multiply_3_4,
} from '../../../js/hw-3/task-1';

describe('[JS] - [HW 3] - Task 1', () => {
  test('item_1 should be 5', () => {
    expect(item_1).toBe(5);
  });

  test('item_2 should be 3', () => {
    expect(item_2).toBe(3);
  });

  test('item_3 should be the sum of item_1 and item_2', () => {
    expect(item_3).toBe(item_1 + item_2);
  });

  test("item_4 should be 'Hello World'", () => {
    expect(item_4).toBe('Hello World');
  });

  test('sum_3_4 should concatenate item_3 and item_4', () => {
    expect(sum_3_4).toBe(item_3 + item_4);
  });

  test('multiply_3_4 should result in NaN as item_4 is a string', () => {
    expect(multiply_3_4).toBeNaN();
  });

  test('item_5 should be equal to item_3', () => {
    expect(item_5).toBe(item_3);
  });

  test('item_6 should be 15', () => {
    expect(item_6).toBe(15);
  });

  test("item_6_type should be 'number'", () => {
    expect(item_6_type).toBe('number');
  });

  test('item_7 should be a string representation of item_6', () => {
    expect(item_7).toBe(String(item_6));
  });

  test("item_7_type should be 'string'", () => {
    expect(item_7_type).toBe('string');
  });
});
