<template>
  <div class="home">
    <video autoplay muted loop id="myVideo">
      <source src="../assets/videobg2.mp4" type="video/mp4" />
    </video>
    <div class="header">
      <div class="desc">
        <div class="usp">
          <h1 cass="burjman">The Burjman</h1>
          <h1 class="slogan">Conquering The Jungle</h1>
        </div>
        <hr />
        <p>
          Underground expertise for those who seek to be in control of their
          lives.
        </p>
      </div>
      <div class="logo" />
      <NewsLetter />
    </div>

    <div class="page-content">
      <BlogSection />
      <Promotion />
    </div>
  </div>
</template>

<script>
import NewsLetter from "../components/NewsLetter.vue";
import Promotion from "../components/Promotion.vue";
import BlogSection from "./blog/BlogSection.vue";
export default {
  name: "HomePage",
  components: { NewsLetter, BlogSection, Promotion },
};
</script>

<style scoped>
.home {
  position: relative;
  top: 0;
  margin: 0;
  padding: 0;
}
.header {
  position: relative;
  top: 0;
  margin: 0;
  height: 62.8vh;
  padding: 21px 89px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 55px 13px #222;
}
.usp {
  color: #fff;
}
.desc {
  width: 377px;
  height: fit-content;
  margin: 21px;
  background-color: rgb(25, 25, 25);
  padding: 21px;
  border-radius: 4px;
}
.desc p {
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  line-height: 29px;
}
.burjman {
  width: 86%;
  margin: 0 auto;
  font-weight: bold;
  font-size: 34px;
  color: #fff;
}
.slogan {
  font-weight: bold;
  font-size: 29px;
  color: chartreuse;
}
.page-content {
  background-color: #222;
  margin: 0;
  padding: 21px;
}
video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -1;
}
.logo {
  width: 377px;
  height: 233px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../assets/logo-black.png");
}
</style>