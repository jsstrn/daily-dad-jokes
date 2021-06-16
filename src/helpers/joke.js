const { jokesApiUrl } = require("../constants");
const axios = require("axios");
const { telegramChannelName, telegramChannelUrl } = require("../constants");

const options = {
  headers: {
    "User-Agent": `${telegramChannelName} (${telegramChannelUrl})`,
    Accept: "application/json",
  },
};

const getJoke = async () => {
  try {
    const response = await axios.get(jokesApiUrl, options);

    return response.data.joke;
  } catch (error) {
    console.error("[Error] Unable to get joke from API service", error);
  }
};

const searchJoke = async (query) => {
  try {
    const url = `${jokesApiUrl}/search?term=${query}`;
    const { data } = await axios.get(url, options);

    return data.results;
  } catch (error) {
    console.error(
      "[Error] Unable to get search results from API service",
      error
    );
  }
};

module.exports = {
  getJoke,
  searchJoke,
};
