<script setup lang="ts">
import {ref} from "vue";

import {useLocale} from "vuetify";

import Canvas from "@/components/Canvas.vue";
import Toolbar from "@/components/Toolbar.vue";
import Config from "@/components/Config.vue";

const title = ref("Title");
const titleColor = ref("#000");
const width = ref(2560);
const height = ref(1080);
const imgSrc = ref("./default.webp");

const reset = () => {
  title.value = "Title";
  titleColor.value = "#000";
  width.value = 2560;
  height.value = 1080;
  imgSrc.value = "./default.webp";
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar>
        <Toolbar/>
      </v-app-bar>

      <v-navigation-drawer style="width: fit-content">
        <Config
            v-model:title="title"
            v-model:titleColor="titleColor"
            v-model:width="width"
            v-model:height="height"
            v-model:imgSrc="imgSrc"
        ></Config>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <v-card>
            <v-card-item>
              <v-card-title>{{ $t("Preview") }}</v-card-title>
              <v-card-subtitle>{{ $t("All your edits will be instantly reflected here") }}</v-card-subtitle>
            </v-card-item>

            <v-card-item>
              <Canvas :title :titleColor :width :height :imgSrc></Canvas>
            </v-card-item>

            <v-card-actions>
              <v-btn @click="reset">{{ $t("Reset") }}</v-btn>
              <v-btn>{{ $t("Export") }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>

</template>

<style scoped></style>
