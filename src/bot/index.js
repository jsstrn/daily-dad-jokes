const { Telegraf, Telegram } = require("telegraf");
const { telegramBotToken } = require("./constants");
const { getJoke } = require("../helpers/joke");

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const telegraf = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

telegraf.start(async (ctx) => {
  await ctx.reply(`I can tell you a /joke.`);
});

telegraf.help(async (ctx) => {
  await ctx.reply(`I can tell you a /joke.`);
});

telegraf.command("joke", async (ctx) => {
  const joke = await getJoke();
  await ctx.reply(joke);
});

module.exports = {
  telegraf,
  telegram,
};
