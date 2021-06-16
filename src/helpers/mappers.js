module.exports.mapResultsToAnswerInlineQuery = (results) => {
  return results.map(({ id, joke }) => ({
    id,
    title: joke,
    type: "article",
    thumb_url: "https://i.imgur.com/NIaJGyw.png",
    input_message_content: {
      message_text: joke,
    },
  }));
};
