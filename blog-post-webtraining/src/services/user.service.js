import api from './api';

class UserService {
  getUser(userId) {
    return api.get(`/users/${userId}`);
  }

  getAll() {
    return api.get('/users');
  }
}

export default new UserService();
