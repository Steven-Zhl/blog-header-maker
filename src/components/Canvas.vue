<script setup lang="ts">

import {computed, onMounted, ref, watch} from "vue";

const props = defineProps({
  title: String,
  titleColor: String,
  width: Number,
  height: Number,
  imgSrc: String,
});

const ratio = computed(() => props.height / props.width);
const canvasElement = ref(null);
const canvasHeight = ref(0);
const adjustHeight = () => {
  canvasHeight.value = ratio.value * canvasElement.value.offsetWidth;
}

onMounted(() => adjustHeight())
watch(() => ratio.value, () => adjustHeight())
</script>

<template>
  <div class="canvas" ref="canvasElement" :style="{height: `${canvasHeight}px`}">
    <p :style="{color: `${titleColor}`}">{{ props.title }}</p>
    <v-img ref="image" :src="imgSrc" :width="props.width" :height="props.height"></v-img>
  </div>
</template>

<style lang="less">
.canvas {
  overflow: hidden;
  position: relative;
  width: 100%;

  p {
    font-family: "得意黑", sans-serif, serif;
    font-size: 64px;
    z-index: 1;
    position: absolute;
    top: 40%;
    left: 40%;
  }

  img {
    object-fit: cover;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>