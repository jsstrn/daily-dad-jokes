const { jokesApiUrl } = require("./constants");
const axios = require("axios");

const options = {
  headers: {
    "User-Agent": "Daily Dad Jokes (https://t.me/DailyDadJokes)",
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

module.exports = {
  getJoke,
};
