const {
  getJoke,
  searchJoke,
  mapResultsToAnswerInlineQuery,
} = require("../helpers");

class Commands {
  constructor(bot) {
    this.bot = bot;
  }

  init(bot) {
    this.bot = bot;

    return this;
  }

  startCommand() {
    this.bot.start(async (ctx) => {
      await ctx.reply(`I can tell you a /joke.`);
    });

    return this;
  }

  helpCommand() {
    this.bot.help(async (ctx) => {
      await ctx.reply(`I can tell you a /joke.`);
    });

    return this;
  }

  jokeCommand() {
    this.bot.command("joke", async (ctx) => {
      const joke = await getJoke();
      await ctx.reply(joke);
    });

    return this;
  }

  handleInlineQuery() {
    this.bot.on("inline_query", async (ctx) => {
      const query = ctx.inlineQuery.query;
      const results = await searchJoke(query);
      const answers = mapResultsToAnswerInlineQuery(results);

      await ctx.answerInlineQuery(answers);
    });

    return this;
  }
}

module.exports = {
  Commands,
  commands: new Commands(),
};
