const app = require("./app.js");
const request = require("supertest");

describe("Test GET /ynap", () => {
  // should have a string "Hello 'You Need A Project' Community!"
  // should response with 200 status code
  test("should response with 200 status code", async () => {
    const response = await request(app)
      .get("/ynap")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /ynap", () => {
  test("It should respond with 201 success", async () => {
    const response = await request(app)
      .post("/ynap")
      .send({
        student: "Trinh Nguyen",
        teacher: "John Rice",
        project: "You need a porject community",
      })
      .expect("Content-Type", /json/)
      .expect(201);
    
  });
});
