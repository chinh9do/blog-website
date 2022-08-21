import api from './api';
import jwtInterceptor from './setupInterceptors';

class PostService {
    getAll() {
        return api.get('/blogs/posts');
    }

    getByBlogId(blogId) {
        return api.get(`/blogs/posts/${blogId}`);
    }

    createPost(post) {
        return jwtInterceptor.post(`blogs/posts/${post.blogId}`, post)
    }

    updatePost(id, post) {
        return jwtInterceptor.put(`blogs/${id}`, post)
    }

    deletePost(blogId, postId) {
        return jwtInterceptor.delete(`blogs/${blogId}/posts/${postId}`)
    }
}

export default new PostService();
