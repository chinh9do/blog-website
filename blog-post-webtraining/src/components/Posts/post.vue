<template>
    <div v-if="post" class="container p_top post_page">
        <!-- <div class="post_tag">
            Title .......
        </div> -->
        <div class="post_banner" :style="{ backgroundImage: `url(http://placebeard.it/1080/720)` }">

        </div>
        <div class="post_content">
            <div class="owner">
                Article written by <b> Chinh Do</b>
            </div>
            <hr />
            <h1> {{ post.title }}</h1>
            <div class="editor" v-html="post.content"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            post:
            {
                id: 1,
                title: "Post title",
                shortContent:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                content: `<p></p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>`
            }
        }
    },
}
</script>
<style>
.p_top{
    padding-top: 20px;
}

.post_page {
    padding-bottom: 100px;
}

.post_page .post_tag {
    background: var(--grape);
    display: inline-block;
    font-size: 21px;
    padding: 5px 10px;
    color: black;
    font-weight: 100;
}

.post_page .post_banner {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    height: 350px;
}

.post_page .post_content {
    margin-top: 50px;
}

.post_page .post_content .editor {
    font-size: 17px;
}

</style>