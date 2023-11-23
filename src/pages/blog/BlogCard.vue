<template>
  <div class="card">
    <router-link :to="{ name: 'blogPost', params: { id } }"
      ><h3>{{ title }}</h3></router-link
    >

    <p>
      <router-link :to="{ name: 'blogPost', params: { id } }"
        ><img :src="require(`@/assets/${img}`)" alt="title" /></router-link
      ><span>{{ desc }}</span>
    </p>
    <router-link class="read-btn" :to="{ name: 'blogPost', params: { id } }"
      >Read More...</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["img", "title", "desc", "id"],
  data() {
    return {
      defaultImg: "",
      modifiedTitle: "title",
    };
  },
  mounted() {},
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 21px;
  max-width: 100%;
  height: 326px;
  overflow: hidden;
  padding: 5px 0 0 0;
  background: #fff;
  border-radius: 13px;
  overflow: hidden;
}
.card img {
  float: left;
  border-radius: 4px;
  border: 3px solid #000;
  height: 144px;
  width: max-content;
  margin: 0 13px 0 0;
}
.card h3 {
  padding: 3px;
  margin: 13px;

  font-size: 21px;
  font-weight: bolder;
  text-decoration: underline;
  color: #333;
}
p {
  text-align: start;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  margin: 0 21px;
  height: fit-content;
  overflow: hidden;
  background: linear-gradient(#333, #333, #fff);
  mix-blend-mode: darken;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.read-btn {
  text-decoration: none;

  position: relative;
  bottom: 0;
  border-radius: 13px;
  padding: 8px 13px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #333;
  color: #fff;
  transition: all 0.09s ease;
}
.read-btn:hover {
  background-color: chartreuse;
  color: #333;
  transition: all 0.09s ease;
}
</style>