import axios from 'axios';

export const fetchComputerElement = async (pastUserElement: string) => {
  const { data } = await axios.post<string>(
    `/computerElement/${pastUserElement}`
  );
  return data;
};

export const cleanElementsHistory = async () =>
  await axios.delete('/elementsHistory');
