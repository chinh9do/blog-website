import api from './api';

class PostService {
    getAll() {
        return api.get('/blogs/posts');
    }

    getByBlogId(blogId) {
        return api.get(`/blogs/posts/${blogId}`);
    }

    createPost(post) {
        return api.post(`/blogs/posts/${post.blogId}`, post)
    }

    updatePost(id, blog) {
        return api.put(`/blogs/${id}`, blog)
    }

    deletePost(blogId, postId) {
        return api.delete(`/blogs/${blogId}/posts/${postId}`)
    }
}

export default new PostService();
