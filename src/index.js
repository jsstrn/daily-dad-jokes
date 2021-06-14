const { telegram, telegraf } = require("./bot");
const { getJoke } = require("./jokes");
const { telegramChannelName } = require("./constants");

module.exports.getWebhook = async (event) => {
  try {
    const webhook = await telegram.getWebhookInfo();

    console.log("[EVENT]", JSON.stringify(event));
    console.log("[HEADERS]", JSON.stringify(event.headers));

    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(webhook),
    });
  } catch (error) {
    console.error("[Error] Unable to get webhook info", error);
  }
};

module.exports.setWebhook = async (event) => {
  try {
    const { domainName, stage } = event.requestContext;
    const handler = "handleBotRequests";
    const url = `${domainName}/${stage}/${handler}`;

    await telegram.setWebhook(url);

    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify("Successfully set webhook"),
    });
  } catch (error) {
    console.error("[Error] Unable to set webhook", error);
  }
};

module.exports.handleBotRequests = async (event) => {
  try {
    telegraf.handleUpdate(JSON.parse(event.body));

    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(""),
    });
  } catch (error) {
    console.error("[Error] Unable to handle bot requests", error);
  }
};

module.exports.broadcastToChannel = async () => {
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
