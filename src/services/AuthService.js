const AuthService = {
  isAuthenticated: () => {
    return !!localStorage.getItem("user");
  },
  login: (userInfo) => {
    localStorage.setItem("user", JSON.stringify(userInfo));
  },
  logout: () => {
    localStorage.removeItem("user");
  },
};

export default AuthService;
