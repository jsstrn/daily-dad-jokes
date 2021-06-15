const commands = require("../bot/commands");

describe("Commands", () => {
  const bot = {
    start: jest.fn(),
    help: jest.fn(),
    command: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call start command once", () => {
    commands.init(bot).startCommand();

    expect(bot.start).toHaveBeenCalledTimes(1);
  });

  it("should call help command once", () => {
    commands.init(bot).helpCommand();

    expect(bot.help).toHaveBeenCalledTimes(1);
  });

  it("should call joke command once with correct arguments", () => {
    commands.init(bot).jokeCommand();

    expect(bot.command).toHaveBeenCalledTimes(1);
    expect(bot.command).toHaveBeenCalledWith("joke", expect.any(Function));
  });

  it("should call all chained commands once each", () => {
    commands.init(bot).startCommand().helpCommand().jokeCommand();

    expect(bot.start).toHaveBeenCalledTimes(1);
    expect(bot.help).toHaveBeenCalledTimes(1);
    expect(bot.command).toHaveBeenCalledTimes(1);
  });
});
