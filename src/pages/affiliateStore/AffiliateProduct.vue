<template>
  <div class="product">
    <h3 class="title">
      {{ title }}
    </h3>
    <img src="../../assets/logo-black.png" :alt="title" />
    <p>{{ desc }}</p>

    <button>View Details</button>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "price"],
  data() {
    return {
      defaultImg: "../../assets/logo-black.png",
    };
  },
};
</script>

<style scoped>
.product {
  max-width: 377px;
  max-height: 377px;
  background-color: #fff;
  border-radius: 21px;
  color: #111;
}
h3 {
  font-size: 18px;
  color: #111;
}
img {
  width: 62.8%;
}
p {
  height: 55px;
  overflow: hidden;
}
button {
  margin: 5px;
  height: 34px;
  width: 62.8%;
  border: 0;
  border-radius: 13px;
  background-color: forestgreen;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}
</style>>
