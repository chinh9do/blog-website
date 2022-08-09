<template>
  <header>
    <div class="container header_container">
      <div class="logo">
        <router-link to="/">
          <img alt="Vue logo" src="../../assets/logo.png" />
        </router-link>
      </div>
      <div>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/blogs">Blogs</router-link>
          </li>
          <li>
            <router-link to="/posts">Posts</router-link>
          </li>
          <!-- <li>
            <router-link to="/login">Sign in</router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </header>
</template>
<style>
</style>
