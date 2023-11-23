<template>
  <div class="affiliate-page">
    <h1>Affiliate Store</h1>
    <hr />
    <div class="products">
      <AffiliateProduct
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :desc="product.desc"
        :price="product.price"
        :id="product.id"
      />
    </div>
  </div>
</template>

<script>
import AffiliateProduct from "./AffiliateProduct.vue";

export default {
  components: {
    AffiliateProduct,
  },
  data() {
    return {
      products: [
        {
          title: "Jaw Exerciser",
          desc: "Make your jawline chiseled with this magical device.",
          price: 24.99,
          id: 1,
        },
        {
          title: "Reflex Tennis Ball",
          desc: "Improve your technique and reflexes.",
          price: 19.99,
          id: 2,
        },
        {
          title: "Freestanding Punching Bag",
          desc: "lose weight, build muscle, and gain confidence in street fights.",
          price: 149.99,
          id: 3,
        },
      ],
    };
  },
};
</script>

<style scoped>
.products {
  width: 86vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 13px;
  padding: 21px 21px 21px 55px;
}
</style>