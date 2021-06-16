const { getJoke, searchJoke } = require("./joke");
const { mapResultsToAnswerInlineQuery } = require("./mappers");

module.exports = {
  getJoke,
  searchJoke,
  mapResultsToAnswerInlineQuery,
};
