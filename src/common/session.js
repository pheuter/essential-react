/**
 * Singleton representing the current session.
 *
 * Currently using `window.user` to determine if user is logged in.
 */
class Session {
  constructor(globalConfig) {
    let { user } = globalConfig;

    this.loggedIn = user ? true : false;
  }
}

let session = new Session(window);


export default session;