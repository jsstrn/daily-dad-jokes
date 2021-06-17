const { getJoke, searchJoke } = require("../helpers/joke");
const mockAxios = require("axios");

jest.mock("axios");

const mockHeaders = {
  headers: {
    Accept: "application/json",
    "User-Agent": "Staging Channel (https://t.me/StagingChannel)",
  },
};

describe("Joke", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("gets a joke", async () => {
    mockAxios.get.mockResolvedValue({
      data: { joke: "Cupidatat qui irure reprehenderit." },
    });

    const joke = await getJoke();

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://icanhazdadjoke.com",
      mockHeaders
    );
    expect(joke).toBe("Cupidatat qui irure reprehenderit.");
  });

  it("searches for a joke", async () => {
    mockAxios.get.mockResolvedValue({
      data: {
        results: [
          { id: "123", joke: "Amet ut adipisicing laboris." },
          { id: "456", joke: "Occaecat aliquip fugiat." },
        ],
      },
    });

    const results = await searchJoke("butterfly");

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://icanhazdadjoke.com/search?term=butterfly",
      mockHeaders
    );

    expect(results).toEqual([
      { id: "123", joke: "Amet ut adipisicing laboris." },
      { id: "456", joke: "Occaecat aliquip fugiat." },
    ]);
  });
});
