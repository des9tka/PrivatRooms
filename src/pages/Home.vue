<template>
  <div class="home-container">
    <h1>Home</h1>
    <p>PrivateRooms is a new platform where you can create private and public chat rooms to connect with friends,
      family, and colleagues. With Rooms, you can:
    </p>
    <table>
      <li>Create private rooms with a password and access key so that only the people you invite can join.</li>
      <li>Create public rooms that anyone can join.</li>
      <li>Comment conversations with other users.</li>
    </table>
    <h2>Here are some of the benefits of using Rooms:</h2>
    <p><span>Privacy:</span> Rooms takes your privacy seriously. All private rooms are password protected and only
    the people you
    invite can join.</p>
    <p><span>Security:</span> Rooms uses the latest security technology to protect your data.</p>
    <p><span>Ease of use:</span> Rooms is easy to use and even your grandma can figure it out.</p>
    <p><span>It's free:</span> Rooms is free to join and use.</p>

    <p>
      The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that
      doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler
      text
      can be very useful when the focus is meant to be on design, not content.
    </p>

    <label>Go to Public rooms</label>

    <div class="wrap">
      <router-link to="/rooms">
        <button class="button">Go</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
}
</script>

<style scoped>
label {
  color: #00FFCB;
}

span {
  color: yellow;
}

table {
  text-align: center;
  width: 100%;

}

.home-container {
  text-align: center;
  align-items: center;
  color: #4FD1C5;
}

p {
  color: white;
}

h1 {
  color: aqua;
}

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