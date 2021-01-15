class Auth {
  constructor() {
    this.authenticated =  true;
    this.authorized= true;
  }

  login(cb) {
    this.authenticated =   true;
    cb();
  }
  loginProcess(cb) {
    this.authorized =true;
    cb();
  }
  logout(cb) {
      this.authenticated = false;
      cb();
    }

 
  isAuthenticated() {
    return this.authenticated;
  }

  isAuthorized() {
    return this.authorized;
  }
}

export default new Auth();