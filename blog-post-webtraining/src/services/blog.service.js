// import api from './api';
import Api from '@meforma/vue-toaster/src/api';
import jwtInterceptor from './setupInterceptors';
import api from './api';

class BlogService {
  getAll() {
    return api.get('blogs');
  }

  getByUserId(userId) {
    return jwtInterceptor.get(`blogs/${userId}`);
  }

  getById(id) {
    return jwtInterceptor.get(`blogs/${id}`);
  }

  createBlog(blog) {
    return jwtInterceptor.post('blogs', blog)
  }

  updateBlog(blog) {
    return jwtInterceptor.put(`blogs/${blog.id}`, blog)
  }

  deleteBlog(id) {
    return jwtInterceptor.delete(`blogs/${id}`)
  }
}

export default new BlogService();
