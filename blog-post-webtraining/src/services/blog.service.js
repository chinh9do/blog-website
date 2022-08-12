import api from './api';

class BlogService {
  getAll() {
    return api.get(`/blogs/${userId}`);
  }

  getById(id) {
    return api.get(`/blogs/${id}`);
  }

  createBlog(blog) {
    return api.post('/blogs', blog)
  }

  updateBlog(id, blog) {
    return api.put(`/blogs/${id}`, blog)
  }

  deleteBlog(id) {
    return api.delete(`/blogs/${id}`)
  }
}

export default new BlogService();
