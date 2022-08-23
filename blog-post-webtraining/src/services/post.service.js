import api from './api';
import jwtInterceptor from './setupInterceptors';

class PostService {
    getAll(userId) {
        return api.get(`/blogs/posts/${userId}`);
    }

    getByBlogId(blogId) {
        return api.get(`/blogs/posts/${blogId}`);
    }

    getById(postId) {
        return api.get(`/blogs/posts=${postId}`);
    }

    createPost(post) {
        return jwtInterceptor.post(`blogs/posts/${post.blogId}`, post)
    }

    updatePost(post) {
        return jwtInterceptor.put(`blogs/posts`, post)
    }

    deletePost(blogId, postId) {
        return jwtInterceptor.delete(`blogs/${blogId}/posts/${postId}`)
    }
}

export default new PostService();
