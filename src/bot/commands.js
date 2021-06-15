const { getJoke } = require("../helpers/joke");

const commands = (bot) => ({
  startCommand: function () {
    bot.start(async (ctx) => {
      await ctx.reply(`I can tell you a /joke.`);
    });

    return this;
  },

  helpCommand: function () {
    bot.help(async (ctx) => {
      await ctx.reply(`I can tell you a /joke.`);
    });

    return this;
  },

  jokeCommand: function () {
    this.bot.command("joke", async (ctx) => {
      const joke = await getJoke();
      await ctx.reply(joke);
    });

    return this;
  },
});

module.exports = commands;
