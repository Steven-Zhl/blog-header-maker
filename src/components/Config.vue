<script setup>
import {ref} from "vue";

const title = defineModel("title");
const titleColor = defineModel("titleColor");
const width = defineModel("width");
const height = defineModel("height");
const imgSrc = defineModel("imgSrc");
const exportFormats = ref(["png", "jpeg", "webp"]);

function onUploadBg(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imgSrc.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>

<template>
  <v-list>

    <v-list-subheader>{{ $t('Title') }}</v-list-subheader>
    <v-list-item>
      <v-text-field :label="$t('Title')" v-model="title"></v-text-field>
    </v-list-item>
    <v-list-item>
      <v-color-picker label="Title color" v-model="titleColor"></v-color-picker>
    </v-list-item>

    <v-divider/>

    <v-list-subheader>{{ $t('Background image') }}</v-list-subheader>
    <v-list-item>
      <v-text-field :label="$t('Width')" v-model="width" type="number"></v-text-field>
    </v-list-item>
    <v-list-item>
      <v-text-field :label="$t('Height')" v-model="height" type="number"></v-text-field>
    </v-list-item>
    <v-list-item>
      <v-file-input accept="image/*" :label="$t('Background image')" prepend-icon="" @change="onUploadBg"/>
    </v-list-item>

    <v-divider/>

    <v-list-subheader>{{ $t('Icon') }}</v-list-subheader>
    <v-list-item>
      <v-file-input accept="image/*" :label="$t('Icon')" prepend-icon=""></v-file-input>
    </v-list-item>

    <v-divider/>

    <v-list-subheader>{{ $t('General') }}</v-list-subheader>
    <v-list-item>
      <v-select :label="$t('Export format')" :items="exportFormats"></v-select>
    </v-list-item>

  </v-list>
</template>
