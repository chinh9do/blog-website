// import api from './api';
import jwtInterceptor from "./setupInterceptors";
import api from "./api";

class BlogService {
  getAll() {
    return api.get("blogs");
  }

  getByUserId(userId) {
    return api.get(`blogs/userId=${userId}`);
  }

  getById(payload) {
    console.log(payload.isIncludePosts);
    return api.get(`blogs/${payload.id}&${payload.isIncludePosts}`);
  }

  createBlog(blog) {
    return jwtInterceptor.post("blogs", blog);
  }

  updateBlog(blog) {
    return jwtInterceptor.put(`blogs/${blog.id}`, blog);
  }

  deleteBlog(id) {
    return jwtInterceptor.delete(`blogs/${id}`);
  }
}

export default new BlogService();
