<template>
  <div id="app">
    <tiny-whale></tiny-whale>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    'tiny-whale': () => import('./components/tiny-whale')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  font-size: 30px;
}
</style>
