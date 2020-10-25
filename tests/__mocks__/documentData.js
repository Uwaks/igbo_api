import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const wordId = new ObjectId('5f864d7401203866b6546dd3');
const wordSuggestionData = {
  originalWordId: wordId,
  word: 'word',
  wordClass: 'wordClass',
  definitions: ['first'],
};

const wordSuggestionApprovedData = {
  originalWordId: wordId,
  word: 'word',
  wordClass: 'wordClass',
  definitions: ['first'],
  approvals: ['first user', 'second user'],
};

const malformedWordSuggestionData = {
  word: 'word',
  wordCllass: 'wordClass',
  definitions: ['first'],
};

const updatedWordSuggestionData = {
  word: 'newWord',
  wordClass: 'newWordClass',
  definitions: ['first', 'second'],
};

const malformedWordData = {
  worrd: 'newWord',
  wordClass: '',
  definitions: [],
};

const updatedWordData = {
  word: 'newWord',
  wordClass: 'verb',
  definitions: [],
};

const exampleSuggestionData = {
  igbo: 'igbo text',
  english: 'english text',
};

const exampleSuggestionApprovedData = {
  igbo: 'igbo text',
  english: 'english text',
  approvals: ['first user', 'second user'],
};

const malformedExampleSuggestionData = {
  associatedWords: ['wrong'],
};

const exampleId = new ObjectId('5f864d7401203866b6546dd3');
const updatedExampleSuggestionData = {
  igbo: 'updated igbo',
  english: 'updated english',
  associatedWords: [exampleId],
};

const exampleData = {
  igbo: 'igbo text',
  english: 'english text',
};

const updatedExampleData = {
  igbo: 'updated igbo text',
  english: 'updated english text',
  associatedWords: ['5f864d7401203866b6546dd3'],
};

const genericWordData = {
  word: 'genericWord',
  wordClass: 'noun',
  definitions: [],
};

const genericWordApprovedData = {
  word: 'genericWord',
  wordClass: 'noun',
  definitions: [],
  approvals: ['first user', 'second user'],
};

const malformedGenericWordData = {
  word: 'newGenericWord',
  wordClass: '',
  definitions: [],
  approvals: 'car',
};

const updatedGenericWordData = {
  word: 'newWord',
  wordClass: 'verb',
  definitions: ['required'],
  approvals: 2,
  denials: 1,
};

export {
  wordSuggestionData,
  wordSuggestionApprovedData,
  malformedWordSuggestionData,
  updatedWordSuggestionData,
  malformedWordData,
  updatedWordData,
  exampleSuggestionData,
  exampleSuggestionApprovedData,
  malformedExampleSuggestionData,
  updatedExampleSuggestionData,
  exampleData,
  updatedExampleData,
  genericWordData,
  genericWordApprovedData,
  malformedGenericWordData,
  updatedGenericWordData,
};