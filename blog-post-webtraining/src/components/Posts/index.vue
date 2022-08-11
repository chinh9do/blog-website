<template>
  <div class="container">
    <div class="post-feed row">
      <div class="col-md-9">
        <div class="post-feed-header">Welcome to Blogs.com</div>
        <div class="post-feed-item" v-for="id in 100" :key="id">
          <div>Image</div>
          <div class="post-feed-item__info">
            <div class="post-info-meta--inline">infomation</div>
            <div class="post-info-title--inline">content</div>
            <div class="d-flex post-info-footer--inline">
              View
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
<script></script>
<style>
.post-feed {
  padding-top: 20px;
}

.post-feed-item {
  display: flex;
  align-items: flex-start;
  padding: 0.5rem;
  border-bottom: 1px solid #d9d9d9;
}

.post-feed-item__info {
  padding-left: 1rem;
  width: 100%;
}

.post-info-meta--inline {
  display: flex;
}

.post-info-title--inline {
  display: flex;
}

.post-info-footer--inline {
  display: flex;
}
</style>