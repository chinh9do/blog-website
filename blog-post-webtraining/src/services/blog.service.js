import api from './api';

class BlogService {
  getBlog(blogId) {
    return api.get(`/blogs/${userId}`);
  }
}

export default new BlogService();
