class Auth {
  constructor() {
    this.authenticated =  localStorage.getItem("authenticated");
    this.authorized=true
  }

  login(cb) {
    this.authenticated =   localStorage.getItem("authenticated");
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