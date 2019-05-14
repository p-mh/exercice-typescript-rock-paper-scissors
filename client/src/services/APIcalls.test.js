import { PIERRE } from '../../../commons/constantes';
import { fetchComputerElement, cleanElementsHistory } from './APIcalls';
import mockAxios from 'jest-mock-axios';

describe('fetchComputerElement', () => {
  test('should called axios with correct address', () => {
    fetchComputerElement(PIERRE);
    expect(mockAxios.post).toHaveBeenCalledWith(`/computerElement/${PIERRE}`);
  });
});

describe('cleanElementsHistory', () => {
  test('should called axios with correct address', () => {
    cleanElementsHistory();
    expect(mockAxios.delete).toHaveBeenCalledWith('/elementsHistory');
  });
});
