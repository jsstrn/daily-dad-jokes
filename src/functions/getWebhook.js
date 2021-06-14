const { telegram } = require("../bot");

getWebhook = async () => {
  try {
    const webhook = await telegram.getWebhookInfo();

    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(webhook),
    });
  } catch (error) {
    console.error("[Error] Unable to get webhook info", error);
  }
};

module.exports = getWebhook;
