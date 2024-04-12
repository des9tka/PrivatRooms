<template>
  <div class="room-page-container" v-if="this.loaded">
    <div v-if="this.access">
      <h1>Room "{{ room.name }}"</h1>
      <div class="wrap">
        <button class="button" v-on:click="showUnShowKey">See key</button>
      </div>
      <span class='roomKey' v-if="this.key">Secret key: {{ room.id }}</span>
      <h3><label>Description: </label> {{ room.description }}</h3>
      <div v-bind:key="comment" v-for="comment in room.messages" class="comment-wrapper">
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
.room-page-container {
  align-items: center;
  justify-content: center;
  text-align: center;
}

.comment-wrapper {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.roomKey {
  margin-top: 10%;
  color: red
}

label {
  color: aqua;
}

h1 {
  color: aqua;
}

.wrap {
  height: 100%;
  display: flex;
  justify-content: center;
}

.button {
  min-width: 150px;
  min-height: 30px;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 250;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
}

button::before {
  content: '';
  border-radius: 500px;
  min-width: calc(150px + 0px);
  min-height: calc(30px + 0px);
  border: 2px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0, 255, 203, .64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-2px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
</style>