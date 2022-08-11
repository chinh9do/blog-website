<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <router-link to="/">
          <img alt="Vue logo" src="../../assets/logo.png" />
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="menu_top navbar-nav justify-content-end">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blogs">Blogs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts">Posts</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">Sign in</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/signout">Sign out</router-link>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<style>
header{
  background-color: #343a40;
  box-shadow: 1px 2px 2px #888888;
}
header a{
  color: #d9d9d9 !important;
}

.menu_top {
  width: 100%;
  padding-bottom: 0;
}
</style>
