<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 sidebar bg-dark">
                <div class="dashboard-sidebar">
                    <ul class="nav flex-column">
                        <li class="nav-item logo">
                            <a class="nav-link active" href="#">
                                Blog.com <span class="sr-only">(current)</span>
                            </a>
                            <hr class="line-split" />
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Blogs
                            </a>
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Create Blog
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Update Blog
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Posts
                            </a>
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Create Post
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Update Post
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
            <main class="col-md-10 ml-sm-auto px-4">
                <div>
                    content
                </div>

            </main>
        </div>
    </div>
</template>
<style>
.dashboard-sidebar {
    position: relative;
    top: 0;
    height: 100vh;
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

.dashboard-sidebar .sub-menu {
    padding-left: 20px;
}
</style>