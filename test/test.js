const express = require("express");
const app = express();
const chai = require("chai");
const expect = chai.expect;
let should = chai.should();
const request = require("request");
const { describe, it } = require("mocha");
require("dotenv").config();

const api = `http://localhost:${process.env.port}/api`;

describe("Get requests for dog cards", () => {
  it("returns 200 status code for success get all dog cards", (done) => {
    request.get(`${api}/cards`, (error, response, body) => {
      const responseBody = JSON.parse(body);
      expect(responseBody.status).to.equal(200);
      done();
    });
  });

  it("returns an array with 0 or more objects", (done) => {
    request.get(`${api}/cards`, (error, response, body) => {
      const responseBody = JSON.parse(body);
      responseBody.data.should.be.a("array");
      done();
    });
  });
});
