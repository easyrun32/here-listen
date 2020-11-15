const hi = require("./hello.js");

describe("hi", () => {
  it("should return Hello world!", () => {
    expect(hi()).toBe("Hello world!");
  });
});
