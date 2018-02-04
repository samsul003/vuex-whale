<template>
  <div class="whale">
    <img v-bind:style="{'width': this.$store.state.growth + 'px'}"
         src="@/../static/images/tiny-whale.png">
    <br>
    Our <b>Blue-Whale</b> has grown <b>{{ this.$store.state.growth }}</b> feet long!
    <br>
    <div>
      <button class="btn" @click="drinksMilk">Drinks Milk</button>
      <button class="btn" @click="eatsKrill">Eats Krill</button>
      <button class="btn" @click="hungerStrike">Hunger Strikes</button>
      <button class="btn" @click="resetGrowth">Reset Growth</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      drinksMilk() {
        this.$store.dispatch('increment')
      },
      eatsKrill() {
        this.$store.dispatch('increment', 30)
      },
      hungerStrike() {
        this.$store.dispatch('decrement')
      },
      resetGrowth() {
        this.$store.dispatch('reset', 0)
      },
    }
  }
</script>

<style>
  .whale {
    margin-top: 200px;
  }
  .btn {
    width: 130px;
    height: 40px;
    margin: 10px 5px;
    display: inline-block;
    cursor: pointer;
    border-radius: 20px;
    color: #2c3e50;
    font-size: 13px;
    font-weight: bold;
    border-color: #2c3e50;
  }
  .btn:hover {
    background-color: #2c3e50;
    color: #ffffff;
  }
</style>
