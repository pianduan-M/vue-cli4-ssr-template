<template>
  <h1>{{aboutText}}</h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
  asyncData({ store }) {
    return store.dispatch("getAboutText");
  },
  computed:{
    ...mapState(['aboutText'])
  }
}
</script>

<style>

</style>