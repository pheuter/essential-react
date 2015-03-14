import Session from "../../src/common/session";


describe("Session", function() {
  it("should return false when user is logged out", function() {
    window.user = false;
    expect(Session.isLoggedIn()).to.equal(false);
  });

  it("should return true when user is logged in", function() {
    window.user = true;
    expect(Session.isLoggedIn()).to.equal(true);
  });
});