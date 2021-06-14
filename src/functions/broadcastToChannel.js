const { telegram } = require("../bot");
const { getJoke } = require("../helpers/joke");
const { telegramChannelName } = require("../constants");

const broadcastToChannel = async () => {
  try {
    const joke = await getJoke();
    const message = `${joke}\n\n➡️  ${telegramChannelName}`;

    await telegram.sendMessage(telegramChannelName, message);

    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(""),
    });
  } catch (error) {
    console.error("[Error] Unable to broadcast to channel", error);
  }
};

module.exports = broadcastToChannel;
