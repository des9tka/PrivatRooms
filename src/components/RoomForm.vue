<template>
  <div v-if="this.field === 'create'">
    <div class="formContainer">
      <form action="" v-on:submit="createRoom">
        <div>
          <label>Room Name</label><br>
          <input type="text" placeholder="Name" v-model="room_name">
        </div>

        <div>
          <label>Room Description</label><br>
          <input type="text" placeholder="Description" v-model="room_description">
        </div>

        <div>
          <label>Private</label><br>
          <input type="checkbox" v-model="room_private" v-on:click="passwordFieldChange">
        </div>

        <div v-if="this.password_field">
          <label>Room Password</label><br>
          <input v-model="room_password" placeholder="Password"/>
        </div>
        <input type="submit" value="Create Room"/>
      </form>
    </div>
  </div>

  <div v-if="this.field === 'join'">
    <form v-on:submit="joinRoom">
      <label>Room Key</label><br>
      <input v-model="room_key" type="text" placeholder="Key"/>
      <div>
        <label>Private</label>
        <input type="checkbox" v-model="room_private" v-on:click="passwordFieldChange">
      </div>

      <div v-if="this.password_field">
        <label>Room Password</label>
        <input v-model="room_password" placeholder="Password"/>
      </div>

      <input type="submit" value="Join Room"/>
    </form>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';

export default {
  name: "RoomForm",
  props: ['field'],
  emits: ['createRoom'],

  data() {
    return {
      room_name: '',
      room_description: '',
      room_private: false,
      room_password: null,
      room_key: null,

      password_field: false
    }
  },

  methods: {
    passwordFieldChange() {
      this.password_field = !this.password_field
    },

    createRoom(e) {
      e.preventDefault()

      if (!this.room_name) {
        alert('Room name is required!')
      } else if (!this.room_description) {
        alert('Room description is required!')
      } else {
        const newRoom = {
          id: uuidv4(),
          name: this.room_name,
          description: this.room_description,
          messages: [],
          private: this.room_private,
          password: this.room_private ? this.room_password : null
        }

        this.$emit('createRoom', newRoom)

        this.room_name = ''
        this.room_description = ''
        if (this.room_private) {
          this.room_private = false
          this.room_password = ''
        }
      }
    },

    joinRoom(e) {
      e.preventDefault()

      if (!this.room_key) {
        alert('Room key is required!')
      } else if (this.room_private && !this.room_password) {
        alert('Room password is required!')
      } else {
        if (this.room_private && this.room_password) {
          this.$router.push(`/room/${this.room_key}?password=${this.room_password}`)
        } else {
          this.$router.push(`/room/${this.room_key}`)
        }
      }
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid aqua;
  border-radius: 5%;
  background: black;
  color: white;
  height: 125%;
  margin-bottom: 5%;
  text-align: center;
}

.formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  margin-top: 3%;
}
</style>