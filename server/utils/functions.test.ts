import {
  getMoreFrequentlyOccurence,
  defineComputerElements,
} from './functions';

describe('getMoreFrequentlyOccurence', () => {
  test('should return the more frequent element in the array', () => {
    expect(getMoreFrequentlyOccurence(['A', 'A', 'A', 'B'])).toBe('A');
  });
  test('should return null if the array is empty', () => {
    expect(getMoreFrequentlyOccurence([])).toBe(null);
  });
});

describe('defineComputerElements', () => {
  test('should return the correct element to win', () => {
    expect(defineComputerElements(['PIERRE', 'PIERRE', 'PIERRE'])).toBe(
      'PAPIER'
    );
  });
  test("should return a random element if the userElement array don't contain any of planned element", () => {
    expect(defineComputerElements(['A', 'A', 'A', 'B'])).toMatch(
      /(PIERRE)|(PAPIER)|(CISEAUX)/
    );
  });
  test('should return a random element if the userElement array is empty', () => {
    expect(defineComputerElements([])).toMatch(/(PIERRE)|(PAPIER)|(CISEAUX)/);
  });
});
