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
                            <router-link class="nav-link" :to="{ name: 'user-blogs' }">List Blogs</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'user-create-blog' }">Create Blog
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'user-blogs' }">List Posts
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'user-create-post' }">Create Post
                            </router-link>
                        </li>
                    </ul>

                </div>
            </div>
            <main class="col-md-10 ml-sm-auto px-4">
                <div>
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>
<style>
.sidebar{
 height: 100vh;
}

.dashboard-sidebar {
    position: relative;
    top: 0;
    padding-top: .5rem;
    /* overflow-x: hidden;
    overflow-y: auto; */
    font-size: 16px;
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

</style>