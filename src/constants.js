if (process.env.NODE_ENV === 'test') {
  require('dotenv').config()
}

module.exports = {
  jokesApiUrl: process.env.JOKES_API_URL,
  telegramChannelId: process.env.TELEGRAM_CHANNEL_ID,
  telegramChannelUrl: process.env.TELEGRAM_CHANNEL_URL,
  telegramChannelName: process.env.TELEGRAM_CHANNEL_NAME,
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
};
