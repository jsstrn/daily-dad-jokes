const { mapResultsToAnswerInlineQuery } = require("../helpers/mappers");

describe("Mappers", () => {
  describe("Map Results to Answer Inline Query", () => {
    it("should map results to correct format", () => {
      const results = [
        {
          id: "123",
          joke: "Irure officia eiusmod consectetur.",
        },
        {
          id: "456",
          joke: "Adipisicing excepteur proident.",
        },
      ];

      expect(mapResultsToAnswerInlineQuery(results)).toEqual([
        {
          id: "123",
          title: "Irure officia eiusmod consectetur.",
          type: "article",
          thumb_url: expect.any(String),
          input_message_content: {
            message_text: "Irure officia eiusmod consectetur.",
          },
        },
        {
          id: "456",
          title: "Adipisicing excepteur proident.",
          type: "article",
          thumb_url: expect.any(String),
          input_message_content: {
            message_text: "Adipisicing excepteur proident.",
          },
        },
      ]);
    });
  });
});
