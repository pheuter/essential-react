import { getData } from "../../src/common/request";


describe("Request", function() {
  describe("getData", function() {
    let server;

    beforeEach(function() {
      server = sinon.fakeServer.create();
    });

    afterEach(function() {
      server.restore();
    });


    it("should return promise fulfilled with response", function(done) {
      let promise = getData('/test');
      let responseData = {
        prop: "Testing",
        didRespond: true
      }

      server.requests[0].respond(
        200,
        { "Content-Type": "application/json" },
        JSON.stringify(responseData)
      );

      promise.then(function(response) {
        expect(response).to.deep.equal(responseData);
        done();
      });
    });

    it("should return promise rejected with error", function(done) {
      let promise = getData('/anotherTest');
      let responseData = {
        error: "Something went wrong!"
      }

      server.requests[0].respond(
        500,
        { "Content-Type": "application/json" },
        JSON.stringify(responseData)
      );

      promise.catch(function(response) {
        expect(response).to.deep.equal(responseData);
        done()
      });
    });
  });
});