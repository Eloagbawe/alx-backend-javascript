const { expect } = require('chai');
const request = require('request');


describe("api index page", function() {
  it("test status code", function() {
    request.get('http://localhost:7685/', (err, res, body) => {
      if (res) {
        expect(res?.statusCode).to.equal(200);
      }
    });
  });
  it("test correct output", function() {
    request.get('http://localhost:7685/', (err, res, body) => {
      if (body) {
        expect(body?.text).to.equal('Welcome to the payment system');
      }
    });
  });
});
  