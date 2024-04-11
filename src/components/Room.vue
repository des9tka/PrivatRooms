<template>
  <div v-if="!room.private" class="room-container">
    <h1><router-link :to="`/room/${room.id}`">{{room.name}}</router-link></h1>
    <h3>{{ shortDescription() }}</h3>
  </div>
</template>

<script>

export default {
  name: "Room",
  props: ['room'],
  methods: {
    shortDescription() {
      if (this.room.description.length > 15) {
        return this.room.description.substr(0, 15) + '...'
      } else {
        return this.room.description
      }
    }
  }
}
</script>

<style scoped>
.room-container {
  border: 1px solid white;
  margin: 2%;
  border-radius: 5%;
}
</style>