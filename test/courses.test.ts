import request from "supertest";
import app from "../src/config/app";

describe("Test Course Endpoint:", () => {
  it("get request", (done) => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
