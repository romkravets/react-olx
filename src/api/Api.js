import axios from 'axios';

export const Auth = {
  _token: null,

  setToken(token) {
    this._token = token;

    window.localStorage.setItem('___token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  logout() {
    this._token = null;
    window.localStorage.removeItem('___token');
    axios.defaults.headers.common.Authorization = undefined;
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({ email, password }) {
    return axios.post(`/api/auth/login`, {
      email,
      password,
    });
  },
  register({ email, password, fullName }) {
    return axios.post(`/api/auth/register`, {
      email,
      password,
      fullName,
    });
  },
};

export const Account = {
  getUser() {
    return axios.get('/api/account');
  }
}

export const Products = {
  fetchLatest() {
    return axios.get('/api/products/latest');
  }
}
