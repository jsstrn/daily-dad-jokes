const { telegram } = require("./bot");
const { getJoke } = require("./jokes");
const { telegramChannelName } = require("./constants");

module.exports.run = async (event, context, callback) => {
  try {
    const joke = await getJoke();
    const message = `${joke}\n\n➡️  ${telegramChannelName}`;

    await telegram.sendMessage(telegramChannelName, message);

    return callback(null, {
      statusCode: 200,
      body: "",
    });
  } catch (error) {
    console.error("[Error] Unable to send message", error);
  }
};
