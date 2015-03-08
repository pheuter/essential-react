/**
 * Singleton representing the current session.
 *
 * Currently using `window.user` to determine if user is logged in.
 */
class Session {
  constructor(config = {}) {
    this._config = config;
  }

  isLoggedIn() {
    return this._config.user ? true : false;
  }
}

let session = new Session(window);


export default session;