<template>
  <form v-on:submit="addComment">
    <input type="text" v-model="message" placeholder="Write a comment..."/>
  </form>
</template>

<script>
export default {
  name: "CommentForm",
  props: ['room'],
  data() {
    return {
      message: null
    }
  },

  methods: {
    addComment(e) {
      if (this.room.private) {
        e.preventDefault()
      }

      const updatedRoom = {
        id: this.room.id,
        name: this.room.name,
        description: this.room.description,
        messages: [...this.room.messages, this.message],
        private: this.room.private,
        password: this.room.password
      }

      fetch(`/api/rooms/${this.room.id}`, {
        method: 'PUT',
        'Content-type': 'application/json',
        body: JSON.stringify(updatedRoom)
      }).then(response => {
        if (this.room.private && response.status === 200) {
          window.location.reload();
        } else if (response.status !== 200) {
          alert('Something go wrong, reload page and try again!')
        }
      })
    }
  }
}
</script>

<style scoped>
input {
  font-size: 18px;
  border: 1px solid aqua;
  border-radius: 10%;
  background: black;
  color: white;
  margin-bottom: 5%;
  text-align: center;
  width: 25%;
}
</style>