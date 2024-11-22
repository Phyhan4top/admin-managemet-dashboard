import _ from 'lodash';
import capitalize from 'lodash/capitalize';
import truncate from 'lodash/truncate';

export const sentenceTruncater = (sentence?: string, length = 120) => {
  if (typeof sentence === 'undefined') return 'undefined';

  return truncate(capitalize(sentence), { length: length });
};

export const selectNWords = (text: string, numWords = 2) => {
  if (!text) return text; // Make sure text is a string
  return text // Make sure text is a string
    .split(' ')
    .slice(0, numWords)
    .join(' ');
};

export const capitalizeWord = (word: string) => capitalize(word);
export const capitalizeAll = (words: string) =>
  _.words(words).map(capitalize).join(' ');
