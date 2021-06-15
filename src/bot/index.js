const { Telegraf, Telegram } = require("telegraf");
const { telegramBotToken } = require("../constants");
const commands = require("./commands");

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const telegraf = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

commands(telegraf).startCommand().helpCommand().jokeCommand();

module.exports = {
  telegraf,
  telegram,
};
