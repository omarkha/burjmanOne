<template>
  <div class="promotion">
    <h3>FREE eBook Giveaway - Instant Likability</h3>

    <div class="content">
      <img :src="require(`@/assets/${this.img}`)" />
      <div class="column">
        <p>
          From dating to friendships to your business life, being likable opens
          doors for you. Are you ready to take your social skills to the next
          level? Inspired by Dale Carnegie, this book delves into the core
          concepts that make you irrisistably likable.
        </p>
        <form @submit.prevent="handleSubmit">
          <span
            ><strike>$29.99</strike> Get it Today for <strong>$0</strong></span
          >
          <hr />
          <label
            >Enter Your Email Below and
            <u>Recieve A FREE Copy Instantly:</u></label
          >
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email here..."
          />
          <button type="submit">Send Me a FREE Copy</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GiveawayForm from "./GiveawayForm.vue";
export default {
  components: {
    GiveawayForm,
  },
  data() {
    return {
      img: "promo.png",
    };
  },
};
</script>

<style scoped>
img {
  height: 426px;
  border: 3px solid #fff;
  border-radius: 8px;
}
.content {
  margin: 0 auto;
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 21px;
}
h3 {
  color: #111;
  text-decoration: underline;
}
p {
  color: #222;
  line-height: 29px;
  letter-spacing: 1px;
}
strike {
  color: red;
  font-size: 29px;
}
strong {
  color: chartreuse;
  font-size: 29px;
}
.promotion {
  margin: 55px auto;
  border-radius: 21px;
  padding: 21px;
  gap: 3px;
  width: 62vw;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0 0 34px 13px #eef;
}
form {
  margin: 0 auto;
  margin-top: 47px;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  padding: 13px 21px;
  gap: 3px;
  width: 62.8%;
  height: fit-content;
  background-color: #ddd;
}
input {
  margin: 13px auto;
  width: 100%;
  padding: 13px 8px;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
button {
  padding: 13px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  background-color: tomato;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
label {
  font-weight: bold;
  text-align: left;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>