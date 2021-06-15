const { telegram } = require("../bot");
const { getJoke } = require("../helpers/joke");
const { telegramChannelId } = require("../constants");

const broadcastToChannel = async () => {
  try {
    const joke = await getJoke();
    const message = `${joke}\n\n➡️  ${telegramChannelId}`;

    await telegram.sendMessage(telegramChannelId, message);

    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(""),
    });
  } catch (error) {
    console.error("[Error] Unable to broadcast to channel", error);
  }
};

module.exports = broadcastToChannel;
