<template>
  <div class="blog-post">
    <h1 class="title">The Blog Post Title</h1>
    <p>The post id is {{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
.blog-post {
  color: #fff;
}
h1 {
  color: #fff;
}
</style>