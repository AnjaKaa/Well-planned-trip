import { objectToArray } from './helpers';

describe('function objectToArray', () => {
  it('empty object to empty array', () => {
    const temp = objectToArray({});

    expect(Array.isArray(temp)).toBe(true);
    expect(temp.length).toBe(0);

  })
  it('object to  array', () => {
    const temp = objectToArray({
      'key1': 'value1',
      'key2': { 'a': 'b' }
    });

    expect(Array.isArray(temp)).toBe(true);
    expect(temp.length).toBe(2);
    expect(JSON.stringify(temp)).toBe("[\"value1\",{\"a\":\"b\"}]");

  })
})