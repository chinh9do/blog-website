<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 sidebar bg-dark">
                <div class="dashboard-sidebar">
                    <ul class="nav flex-column">
                        <li class="nav-item logo">
                            <router-link class="nav-link active" to="/">Blog.com</router-link>
                            <hr class="line-split" />
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'user-blogs' }">Blogs</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'user-posts' }">Posts
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <main class="col-md-10">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>
<style>
.sidebar {
    height: 100vh;
}

.dashboard-sidebar {
    height: 100%;
    position: relative;
    top: 0;
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: .85rem;
    background-color: #343a40;
}

.dashboard-sidebar .logo {
    padding: 1rem;
}

.dashboard-sidebar .line-split {
    background-color: #d9d9d9;
}

.dashboard-sidebar a {
    color: #d9d9d9 !important;
}

.main-content {
    background-color: #efefef;
}
</style>