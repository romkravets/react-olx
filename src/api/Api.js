import axios from 'axios';

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
    } catch (err) {
      console.log(err);
    }
  },

  login() {
    this._token = 'token';

    this._storeToken();
  },

  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem('token');
    } catch (err) {
      console.log(err);
    }
  },

  _storeToken() {
    try {
      window.localStorage.setItem('___token', JSON.stringify(this._token));
    } catch (err) {
      console.log(err);
    }
  },

}

export  function init() {
  Auth.init();
}
  /*_token: null,

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
  },

  getById(id) {
    return axios.get(`/api/products/${id}`);
  }*/
/*}*/
