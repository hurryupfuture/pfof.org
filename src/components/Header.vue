<template>
    <header>
    <h1 v-on:click="home">
        P<span class="p1">.</span>F<span class="p2">.</span>O<span
          class="p3">.</span>F<span class="p4">.</span>
        Champions!!
    </h1>
    <h2>Payment for Order Flow</h2>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  methods: {
    home() {
      this.$router.push({ path: '/' });
    },
  },
};

</script>
