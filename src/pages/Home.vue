<template>
  <h1>Home</h1>
  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
    The passage is attributed to an unknown typesetter in the 15th century who is thought to have
    scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins
    with/</p>
  <p>
    The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that
    doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text
    can be very useful when the focus is meant to be on design, not content.
  </p>

  <label>Go to Public rooms</label>
  <button>
    <router-link to="/rooms">Go</router-link>
  </button>
</template>

<script>

export default {
  name: "Home",
}
</script>

<style scoped>

</style>