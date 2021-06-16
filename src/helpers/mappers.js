module.exports.mapResultsToAnswerInlineQuery = (results) => {
  return results.map(({ id, joke }) => ({
    id,
    title: joke,
    type: "article",
    thumb_url:
      "https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Emotes-face-laugh-icon.png",
    input_message_content: {
      message_text: joke,
    },
  }));
};
