<template>
  <form @submit.prevent="handleSubmit">
    <h6>Follow Us</h6>
    <hr />
    <label>Get Updated With New Courses, Books, Apps...etc. </label>
    <input
      type="email"
      v-model="email"
      placeholder="ex. johnstones@gmail.com"
    />

    <button type="submit">Follow Us</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>

<style scoped>
form {
  padding: 34px 21px 55px 21px;
  background: rgba(255, 255, 255, 0.86);
  display: flex;
  flex-direction: column;
  margin: 21px;
  border-radius: 13px;
  max-width: 377px;
}
input {
  margin: 13px auto;
  width: 377px;
  padding: 13px 8px;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
label {
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
hr {
  margin: 13px;
  color: #eee;
}
h6 {
  margin: 0;
  padding: 0;
  font-size: 29px;
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
</style>