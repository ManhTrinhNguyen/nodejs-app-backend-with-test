const app = require("./app.js");
const request = require("supertest");

describe("GET /ynap", () => {
  // should have a string "Hello 'You Need A Project' Community!"
  // should response with 200 status code
  test("should response with 200 status code", async () => {
    const response = await request(app)
      .get("/ynap")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
