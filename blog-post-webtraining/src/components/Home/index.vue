<template>
    <div class="container">
        <app-carrousel />
        <div class="row">
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
            <div class="col-md-9 col-sm-12">
                <div class="row">
                    <div class="col-md-6 post_card" v-for="post in posts" :key="post.id">
                        <router-link :to="{ name: 'postDetail', params: { id: post.id } }">
                            <div class="card">
                                <img class="card-img-top" src="http://placebeard.it/300/100" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{{ post.title }}</h5>
                                    <p class="card-text">
                                        {{ post.shortContent }}
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="left_menu">Menu nè</div>
            </div>
        </div>
    </div>
</template>

<script>
import appCarrousel from "../Utils/carousel";

export default {
    components: {
        appCarrousel,
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: "Post title",
                    shortContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                },
                {
                    id: 1,
                    title: "Post title",
                    shortContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                },
                {
                    id: 1,
                    title: "Post title",
                    shortContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                },
                {
                    id: 1,
                    title: "Post title",
                    shortContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                },
                {
                    id: 1,
                    title: "Post title",
                    shortContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                },
                {
                    id: 1,
                    title: "Post title",
                    shortContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                },
            ],
        };
    },
    methods: {
        getData() {
            // axios.get()
        },
    },
};
</script>
<style>
a {
    text-decoration: none;
    color: #000;
}

.post_card {
    margin: 10px 0 20px 0;
    align-items: center;
    background-color: beige;
}

.post_card a {
    text-decoration: none;
    color: #000;
}
</style>
