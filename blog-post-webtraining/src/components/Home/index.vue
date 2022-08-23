<template>
    <div class="container">
        <app-carrousel />
        <div class="row">
            <!-- blogs -->
            <div class="col-md-6">
                <router-link :to="{ name: 'postDetail', params: { id: 1 } }">
                    <div class="card">
                        <img class="card-img-top" src="http://placebeard.it/300/100" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">
                                aaaa
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6">
                <router-link :to="{ name: 'postDetail', params: { id: 1 } }">
                    <div class="card">
                        <img class="card-img-top" src="http://placebeard.it/300/100" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">
                                aaaa
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="row">
            <!-- All posts -->
            <div class="col-md-9 col-sm-12">
                <div class="row">
                    <div v-if="allPosts" class="col-md-6 post-card" v-for="post in allPosts" :key="post.id">
                        <router-link :to="{ name: 'postDetail', params: { id: post.id } }">
                            <div class="card">
                                <img class="card-img-top" src="http://placebeard.it/300/100" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{{ post.title }}</h5>
                                    <p class="card-text">
                                        {{ post.content }}
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="left-menu"> Hot posts</div>
            </div>
        </div>
    </div>
</template>

<script>
import appCarrousel from "../Utils/carousel";
import { mapActions } from "vuex";

export default {
    components: {
        appCarrousel,
    },
    data() {
        return {
            allPosts: null
        };
    },

    methods: {
        ...mapActions('post', ['getPosts']),
    },
    mounted() {
        this.getPosts().then((response) => {
            if (response?.data) {
                this.allPosts = response.data;
            }
        });
    }
};
</script>
<style>
a {
    text-decoration: none;
    color: #000;
}

.post-card {
    margin: .5rem 0 1rem 0;
    align-items: center;
}

.post-card a {
    text-decoration: none;
    color: #000;
}
</style>
