<template>
    <div class="title-content">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    props: { title: String }
}
</script>

<style>
.title-content {
    padding: 1rem 0 1rem 0;
}
</style>