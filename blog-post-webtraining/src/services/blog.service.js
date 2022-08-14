import api from './api';

class BlogService {
  getAll() {
    return api.get('/blogs');
  }

  getByUserId(userId) {
    return api.get(`/blogs/${userId}`);
  }

  getById(id) {
    return api.get(`/blogs/${id}`);
  }

  createBlog(blog) {
    return api.post('/blogs', blog)
  }

  updateBlog(blog) {
    return api.put(`/blogs/${blog.id}`, blog)
  }

  deleteBlog(id) {
    return api.delete(`/blogs/${id}`)
  }
}

export default new BlogService();
