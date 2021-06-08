const { Telegraf, Telegram } = require('telegraf')
const { telegramBotToken } = require('./constants')

if (!telegramBotToken) {
  throw new Error('[ERROR] Telegram bot token is required.')
}

const telegraf = new Telegraf(telegramBotToken)
const telegram = new Telegram(telegramBotToken)

module.exports = {
  telegraf,
  telegram
}
