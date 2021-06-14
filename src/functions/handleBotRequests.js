const { telegraf } = require("../bot");

const handleBotRequests = async (event) => {
  try {
    await telegraf.handleUpdate(JSON.parse(event.body));

    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(""),
    });
  } catch (error) {
    console.error("[Error] Unable to handle bot requests", error);
  }
};

module.exports = handleBotRequests;
