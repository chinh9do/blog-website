<template>
    <div class="container">
        <app-carrousel />
        <div class="row">
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-6 col-sm-6 post-card" v-for="post in posts" :key="post.id">
                        <div class="card" style="width: 20rem">
                            <img class="card-img-top" src="http://placebeard.it/300/100" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{{ post.title }}</h5>
                                <p class="card-text">
                                    {{ post.shortContent }}
                                </p>
                                <a href="#" class="btn btn-primary">Details</a>
                            </div>
                        </div>
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
.post-card {
    margin: 10px 0 20px 0;
    align-items: center;
}

.left_menu {
    width: 100%;
    height: 100%;
    background-color: bisque;
}
</style>
