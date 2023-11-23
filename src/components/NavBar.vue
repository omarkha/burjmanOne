<template>
  <nav>
    <router-link to="/">
      <div class="logo">
        <img
          src="../assets/logo-color.png"
          alt="logo image at the navigation bar"
        />
        <h1>The Burjman</h1>
      </div></router-link
    >
    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'store' }">Store</router-link>
      <router-link :to="{ name: 'blog' }">Blog</router-link>
      <router-link :to="{ name: 'affiliateStore' }"
        >Affiliate Products</router-link
      >
    </div>
  </nav>
</template>


<style>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 89px;
  padding: 3px 55px;
  box-sizing: border-box;
  background-color: #333;
  margin: 0;
  box-shadow: 0 0 13px 3px #222;
  z-index: 2;
}
nav a {
  font-weight: bold;
  color: #eee;
  text-decoration: none;
  margin: 0 13px;
}

nav a.router-link-exact-active {
  color: chartreuse;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 21px;
}
.logo h1 {
  color: #fff;
}
.logo img {
  height: 76px;
}
</style>
