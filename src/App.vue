<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    Dashboard,
  }
};
</script>

<style lang="scss">

  body {
    background-color: #2c3e50;
    color: whitesmoke;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  background-color: #2c3e50;
  color: whitesmoke;
}
</style>
