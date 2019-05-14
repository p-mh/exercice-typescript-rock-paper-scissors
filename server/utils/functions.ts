import { PIERRE, PAPIER, CISEAUX, ELEMENTS } from '../../commons/constantes';

interface IOccurences {
  PIERRE?: number;
  PAPIER?: number;
  CISEAUX?: number;
}

export const getMoreFrequentlyOccurence = elements => {
  if (!elements.length) {
    return null;
  }
  const occurenceCount: IOccurences = elements.reduce(
    (occurences, element) =>
      occurences[element]
        ? { ...occurences, [element]: occurences[element] + 1 }
        : { ...occurences, [element]: 1 },
    {}
  );

  const maxOccurences = Math.max(...Object.values(occurenceCount));
  const moreFrequentlyOccurence = Object.entries(occurenceCount).find(
    ([element, occurences]: [string, number]) => occurences === maxOccurences
  );
  return moreFrequentlyOccurence[0];
};

export const defineComputerElements = (pastUserElements: string[]) => {
  const moreFrequentUserElement = getMoreFrequentlyOccurence(pastUserElements);
  switch (moreFrequentUserElement) {
    case PAPIER:
      return CISEAUX;
    case PIERRE:
      return PAPIER;
    case CISEAUX:
      return PIERRE;
    default:
      return ELEMENTS[Math.round(Math.random() * (ELEMENTS.length - 1))];
  }
};
