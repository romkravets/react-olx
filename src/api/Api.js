import axios from 'axios';

const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  getViewer: '/api/account',
}

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;

    this._storeToken(token);

    this._setTokenToAxios(token);
  },

  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);

      this._setTokenToAxios(token);
    } catch (err) {
      console.log(err);
    }
  },

  login(body) {
    return  axios.post(urls.login, body);

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

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

}

export const Viewer = {
  get() {
  return axios.get(urls.getViewer);
  }
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
