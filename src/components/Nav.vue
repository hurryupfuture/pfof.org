<template>
  <nav>
    <div id="player-1" v-on:click="enterPlayer1"
      v-bind:class="[isPlayer1Active ? 'active' : 'inactive']">
        [{{ player1Flag }}] Player 1: Retail Brokers
    </div>
    <div id="insert-coin" v-on:click="insertCoin">Insert Coin</div>
    <div id="player-2" v-on:click="enterPlayer2"
      v-bind:class="[isPlayer2Active ? 'active' : 'inactive']">
        [{{ player2Flag }}] Player 2: Market Makers
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Nav',
  el: 'nav',
  components: {},
  data() {
    return {
      isPlayer1Active: true,
      isPlayer2Active: false,
      player1Flag: 'X',
      player2Flag: '_',
    };
  },
  methods: {
    enterPlayer1() {
      this.isPlayer1Active = true;
      this.isPlayer2Active = false;
      this.player1Flag = 'X';
      this.player2Flag = '_';
      this.$router.push({ path: '/retail-brokers' });
    },
    enterPlayer2() {
      this.isPlayer2Active = true;
      this.isPlayer1Active = false;
      this.player2Flag = 'X';
      this.player1Flag = '_';
      this.$router.push({ path: '/market-makers' });
    },
    insertCoin() {
      this.$router.push({ path: '/' });
    },
  },
};

</script>
