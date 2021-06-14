const telegram = require("../bot");

setWebhook = async (event) => {
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

module.exports = setWebhook;
