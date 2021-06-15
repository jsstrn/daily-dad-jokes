const { getJoke } = require("../helpers/joke");

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
}

module.exports = new Commands();
