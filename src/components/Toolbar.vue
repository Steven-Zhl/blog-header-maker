<script setup>
import {useLocale} from "vuetify";


const gotoRepo = () => window.open('https://github.com/Steven-Zhl/blog-header-maker');
const gotoHomepage = () => window.open('https://github.com/Steven-Zhl');

</script>

<template>
  <v-toolbar>
    <v-toolbar-title>
      <v-icon icon="mdi-vuejs"></v-icon>
      <span>Blog Header Maker</span>
    </v-toolbar-title>

    <v-toolbar-items variant="plain">
      <v-dialog>
        <template v-slot:activator="{ props: ifShowAbout }">
          <v-btn v-bind="ifShowAbout" icon="mdi-information"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card :title="$t('About')">
            <v-card-text>
              <p>{{ $t("About_1") }}</p>
              <p>{{ $t("About_2") }}</p>
              <p>{{ $t("About_3") }}</p>
              <p>{{ $t("About_4") }}</p>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn :text="$t('Close')" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <v-btn icon="mdi-brightness-6"></v-btn>
      <v-btn icon="mdi-translate" @click=""></v-btn>
      <v-btn icon="mdi-github" @click="gotoRepo"></v-btn>
    </v-toolbar-items>

    <v-avatar @click="gotoHomepage">
      <v-img src="/avatar.jpg"></v-img>
    </v-avatar>
  </v-toolbar>
</template>

<style scoped>

</style>