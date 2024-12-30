<template>
  <!-- <Tutorial /> -->
  <div>
    <h1 class="title">What is your 2025 ?</h1>
    <CrystalBall />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CrystalBall from '~/components/CrystalBall.vue';

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style>
/* What is your 2025 ? */
.title {
  font-family: 'Limelight';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 78px;
  color: #000000;
}
</style>