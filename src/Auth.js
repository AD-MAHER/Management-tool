class Auth {
  constructor() {
    this.authenticated =  localStorage.getItem("authenticated");
    this.authorized= localStorage.getItem("authorized");
  }

  login(cb) {
    this.authenticated =   localStorage.getItem("authenticated");
    cb();
  }
  loginProcess(cb) {
    this.authorized =localStorage.getItem("authorized");
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