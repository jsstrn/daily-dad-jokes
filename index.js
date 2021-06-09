const { telegram } = require("./src/bot");
const { getJoke } = require("./src/jokes");
const { telegramChannelName } = require("./src/constants");

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
