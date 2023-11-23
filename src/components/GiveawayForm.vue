<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input
      type="email"
      v-model="email"
      placeholder="Enter your email here..."
    />
    <button type="submit">Send Me a FREE Copy</button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 13px 21px;
  gap: 3px;
  width: 377px;
  height: fit-content;
  background-color: #fff;
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
button {
  padding: 13px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  background-color: tomato;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
}
label {
  font-weight: bold;
  text-align: left;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>