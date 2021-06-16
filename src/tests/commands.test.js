const { commands, Commands } = require("../bot/commands");

describe("Commands", () => {
  const bot = {
    start: jest.fn(),
    help: jest.fn(),
    command: jest.fn(),
    on: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("calls startCommand once", () => {
    commands.init(bot).startCommand();

    expect(bot.start).toHaveBeenCalledTimes(1);
  });

  it("calls helpCommand once", () => {
    commands.init(bot).helpCommand();

    expect(bot.help).toHaveBeenCalledTimes(1);
  });

  it("calls jokeCommand once with correct arguments", () => {
    commands.init(bot).jokeCommand();

    expect(bot.command).toHaveBeenCalledTimes(1);
    expect(bot.command).toHaveBeenCalledWith("joke", expect.any(Function));
  });

  it("calls handleInlineQuery once with correct arguments", () => {
    commands.init(bot).handleInlineQuery();

    expect(bot.on).toHaveBeenCalledTimes(1);
    expect(bot.on).toHaveBeenCalledWith("inline_query", expect.any(Function));
  });

  it("calls all chained commands once each", () => {
    const instance = commands
      .init(bot)
      .startCommand()
      .helpCommand()
      .jokeCommand()
      .handleInlineQuery();

    expect(bot.start).toHaveBeenCalledTimes(1);
    expect(bot.help).toHaveBeenCalledTimes(1);
    expect(bot.command).toHaveBeenCalledTimes(1);
    expect(instance).toBeInstanceOf(Commands);
  });
});
