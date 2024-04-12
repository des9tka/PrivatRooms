<template>
  <div class="header">
    <router-link to="/">
      <img
          src="https://avatars.mds.yandex.net/i?id=66a014d5d5ff8f5d5f04b00ec90b35317137171f-10803820-images-thumbs&n=13"
          alt="logo">
    </router-link>

    <div class="header-links">
      <router-link to="/">Home</router-link>
      <router-link to="/rooms">Room List</router-link>
      <router-link to="/about">About</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  /*display: flex;*/
  /*justify-content: space-between;*/
  display: grid;
  grid-template-columns: 1fr 4fr;
  text-align: center;
  justify-content: center;
}

img {
  height: 50px;
  width: 50px;
  border-radius: 25%;
}

.header-links {
  display: flex;
  justify-content: space-evenly;
}

a {
  margin: 0.1%;
}
</style>