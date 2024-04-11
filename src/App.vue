<template>
  <div class="main-div">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {Header},
  emits: [],

  data() {

  },
  methods: {},


}
</script>

<style>
.main-div {
  align-items: center;
  border: 1px solid black;
  padding: 2%;
  background: black;

}

a {
  color: aqua;
}

h3 {
  color: blueviolet;
}

label {
  color: white;
}
</style>
