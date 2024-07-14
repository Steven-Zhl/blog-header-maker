// Vue Core
import {createApp} from 'vue'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue I18n
import {createI18n, useI18n} from 'vue-i18n'
import zh_CN from "@/locale/zh-CN.json";
import en_US from "@/locale/en-US.json";

// Components
import '@mdi/font/css/materialdesignicons.css' // Icon font
import App from './App.vue'

const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: "zh-CN",
    messages: {
        "en-US": en_US,
        "zh-CN": zh_CN
    }
});

const vuetify = createVuetify({
    components,
    directives
});

createApp(App).use(i18n).use(vuetify).mount('#app')
