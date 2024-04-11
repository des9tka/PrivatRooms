<template>
  <div class="rooms-wrapper">

    <h1 class="header">Available Public Rooms</h1>

    <div class="wrap">
      <button class="button changeFieldButton" v-on:click="changeFormField"></button>
    </div>

    <RoomForm :field="this.formField" @createRoom="createRoom"/>

    <div :key="room" v-for="room in rooms">
      <Room :room="room"/>
    </div>
  </div>
</template>

<script>
import Room from "@/components/Room.vue";
import RoomForm from "@/components/RoomForm.vue";

export default {
  name: "Rooms",
  components: {RoomForm, Room},
  emits: [],

  data() {
    return {
      rooms: [],
      formField: false
    }
  },
  methods: {
    async gettAllRooms() {
      const res = await fetch('/api/rooms')
      const data = await res.json()
      return data
    },

    changeFormField() {
      if (!this.formField) {

        this.formField = 'create'
        const button = document.getElementsByClassName('changeFieldButton')[0]
        button.innerHTML = 'Join Room'

      } else if (this.formField === 'create') {

        this.formField = 'join'
        const button = document.getElementsByClassName('changeFieldButton')[0]
        button.innerHTML = 'Close'

      } else if (this.formField === 'join') {

        this.formField = false
        const button = document.getElementsByClassName('changeFieldButton')[0]
        button.innerHTML = 'Create Room'
      }

    },

    createRoom(newRoom) {

      fetch('api/rooms', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newRoom)
      })
          .then(value => value.json())
          .then(data => {
            if (data.private) {
              this.$router.push(`room/${data.id}?password=${data.password}`)
            } else {
              this.$router.push(`room/${data.id}`)
            }
          })
    }
  },

  async created() {
    this.rooms = await this.gettAllRooms()

    const button = document.getElementsByClassName('changeFieldButton')[0]
    button.innerHTML = 'Create Room'
  }
}

</script>

<style scoped>
.rooms-wrapper {
  text-align: center;
}


.header {
  color: #4FD1C5;
  font-size: 125%;
}

/*button*/
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
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