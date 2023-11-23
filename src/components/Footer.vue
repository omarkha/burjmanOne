<template>
  <footer>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'store' }">Store</router-link>
      <router-link :to="{ name: 'blog' }">Blog</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </div>
    <div><h3>The Burjman</h3></div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  padding: 21px 55px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #111;
}
.links {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.links a {
  font-weight: bold;
  color: #eee;
  text-decoration: none;
  margin: 0 13px;
}

.links a.router-link-exact-active {
  color: chartreuse;
}
</style>