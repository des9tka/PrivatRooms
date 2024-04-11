<template>
  <div v-if="this.loaded">
    <div v-if="this.access">
      <h1>Room "{{ room.name }}"
        <button v-on:click="showUnShowKey">See key</button>
      </h1>
      <span class='roomKey' v-if="this.key">{{ room.id }}</span>
      <h3>{{ room.description }}</h3>
      <div v-bind:key="comment" v-for="comment in room.messages">
        <Comment :comment="comment"/>
      </div>
      <div>
        <CommentForm :room="room"/>
      </div>
    </div>
    <div v-if="!this.access">
      <h1>Wrong Password or RoomKey!</h1>
    </div>

  </div>
</template>

<script>

import CommentForm from "@/components/CommentForm.vue";
import Comment from "@/components/Comment.vue";

export default {
  name: "Room",
  components: {Comment, CommentForm},
  data() {
    return {
      room: null,
      access: false,
      key: false,
      loaded: false
    }
  },
  async mounted() {

    const id = this.$route.params.id
    const password = this.$route.query.password

    await this.getRoomById(id)

    if (this.room.private && this.room.password) {
      if (this.room.password === password) {
        this.access = true
      }
    } else {
      this.access = true
    }

    this.loaded = true
  },
  methods: {
    async getRoomById(id) {
      await fetch(`/api/rooms/${id}`)
          .then(value => value.json())
          .then((data) => {
            this.room = data
          })
    },
    showUnShowKey() {
      this.key = !this.key
    }
  },
}
</script>

<style scoped>
.roomKey {
  color: red
}
</style>